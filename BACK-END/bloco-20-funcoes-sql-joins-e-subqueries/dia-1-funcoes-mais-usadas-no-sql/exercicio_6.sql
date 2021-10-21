SELECT JOB_ID, COUNT(*) AS Número_de_pessoas_programadoras FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
