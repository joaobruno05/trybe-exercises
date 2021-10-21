SELECT JOB_ID, SUM(SALARY) AS Total_salário FROM hr.employees
GROUP BY JOB_ID;
