SELECT DEPARTMENT_ID, ROUND(AVG(SALARY), 2) AS Média_salário, COUNT(*) AS Número_de_funcionários FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING Número_de_funcionários > 10;