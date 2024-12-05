package com.samuelsjoen.backend.filmography;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilmService {
    @Autowired
    private FilmRepository filmRepository;

    public Film createFilm(Film film) {
        return filmRepository.save(film);
    }

    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    } 

    public void deleteById(Long id) {
        filmRepository.deleteById(id);
    }
}
