package com.samuelsjoen.backend.filmography;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FilmographyController {
    private static final Logger logger = LoggerFactory.getLogger(FilmographyController.class);

    @Autowired
    FilmService filmService;    

    @CrossOrigin(origins = "*")
    @GetMapping("/api/films")
    public List<Film> getFilms() {
        logger.info("Filmography api accessed");
        List<Film> films = filmService.getAllFilms();
        if (films.size() != 0) {
            logger.info("Films data: " + films);
            logger.info("Films fetched and sent");
            return films;
        }
        logger.error("No films found!");
        return List.of();
    }
}
