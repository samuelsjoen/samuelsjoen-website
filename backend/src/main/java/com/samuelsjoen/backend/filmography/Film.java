package com.samuelsjoen.backend.filmography;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("title")
    String title;

    @JsonProperty("description")
    String description;

    @JsonProperty("youtube")
    String youtube;

    @JsonProperty("letterboxd")
    String letterboxd;

    @JsonProperty("poster")
    String poster;

    public Film() {
        
    }

    public Film(String title, String description, String youtube, String letterboxd, String poster) {
        this.title = title;
        this.description = description;
        this.youtube = youtube;
        this.letterboxd = letterboxd;
        this.poster = poster;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getYoutube() {
        return youtube;
    }

    public void setYoutube(String youtube) {
        this.youtube = youtube;
    }

    public String getLetterboxd() {
        return letterboxd;
    }

    public void setLetterboxd(String letterboxd) {
        this.letterboxd = letterboxd;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }
}
