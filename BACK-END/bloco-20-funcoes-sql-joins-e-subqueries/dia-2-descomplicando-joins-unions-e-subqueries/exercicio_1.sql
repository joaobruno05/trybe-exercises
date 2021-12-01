USE Pixar;
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM BoxOffice AS BO
INNER JOIN Movies AS M
ON BO.movie_id = M.id;
