package com.example.codethon.utils;

import cz.jirutka.rsql.parser.ast.AndNode;
import cz.jirutka.rsql.parser.ast.ComparisonNode;
import cz.jirutka.rsql.parser.ast.Node;
import cz.jirutka.rsql.parser.ast.OrNode;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class CustomRsqlVisitor<T> implements RSQLVisitor<Specification<T>, Void> {

    @Override
    public Specification<T> visit(AndNode node, Void param) {
        List<Specification<T>> specs = new ArrayList<>();
        for (Node subNode : node.getChildren()) {
            specs.add(subNode.accept(this));
        }
        Specification<T> result = specs.get(0);
        for (int i = 1; i < specs.size(); i++) {
            result = Specification.where(result).and(specs.get(i));
        }
        return result;
    }

    @Override
    public Specification<T> visit(OrNode node, Void param) {
        List<Specification<T>> specs = new ArrayList<>();
        for (Node subNode : node.getChildren()) {
            specs.add(subNode.accept(this));
        }
        Specification<T> result = specs.get(0);
        for (int i = 1; i < specs.size(); i++) {
            result = Specification.where(result).and(specs.get(i));
        }
        return result;
    }

    @Override
    public Specification<T> visit(ComparisonNode node, Void param) {
        String selectorMessages = node.getSelector();
        String operator = node.getOperator().getSymbol();
        List<String> arguments = node.getArguments();

        if (selectorMessages.equals("messages") && operator.equals("!=") && arguments.contains("empty")) {
            return (root, query, criteriaBuilder) -> criteriaBuilder.isNotEmpty(root.get("messages"));
        }

        return (root, query, criteriaBuilder) -> {
            String selector = node.getSelector();
            String[] selectors = selector.split("\\.");
            Path<?> path = root;
            for (String s : selectors) {
                path = path.get(s);
            }
            String comparison = node.getOperator().getSymbol();
            Object argument = node.getArguments().get(0);
            if (argument instanceof String) {
                argument = argument.toString().toLowerCase();
            }
            switch (comparison) {
                case "==":
                    if (argument instanceof Boolean) {
                        return criteriaBuilder.equal(path, argument);
                    } else {
                        return criteriaBuilder.equal(criteriaBuilder.lower(path.as(String.class)), argument);
                    }
                case "!=":
                    if (argument instanceof Boolean) {
                        return criteriaBuilder.notEqual(path, argument);
                    } else {
                        return criteriaBuilder.notEqual(criteriaBuilder.lower(path.as(String.class)), argument);
                    }
                default:
                    throw new IllegalArgumentException("Operador não suportado: " + comparison);
            }
        };
    }

}
