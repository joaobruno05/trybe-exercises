SELECT M.title, BO.rating
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON BO.movie_id = M.id
ORDER BY rating DESC;