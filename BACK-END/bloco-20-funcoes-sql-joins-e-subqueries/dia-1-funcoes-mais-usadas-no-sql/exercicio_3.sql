SELECT JOB_ID, AVG(SALARY) AS Média_salarial FROM hr.employees
GROUP BY JOB_ID
ORDER BY Média_salarial DESC;
