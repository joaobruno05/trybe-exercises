SELECT MAX(SALARY) AS Maior_salário, MIN(SALARY) AS Menor_salário, SUM(SALARY) AS Somatório_salários, ROUND(AVG(SALARY), 2) AS Média_salarial
FROM hr.employees;
