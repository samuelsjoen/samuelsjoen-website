package com.samuelsjoen.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PortfolioController {

    private static final Logger logger = LoggerFactory.getLogger(PortfolioController.class);

    @CrossOrigin(origins = "*")
    @GetMapping("/api/portfolio")
    @ResponseBody
    public List<String> getImageFilenames() {
        logger.info("Portfolio api accessed");
        String imagesFolderPath = "/app/src/main/resources/static/images/portfolio";
        logger.debug("Looking for images in folder: {}", imagesFolderPath);

        File folder = new File(imagesFolderPath);

        if (!folder.exists()) {
            logger.error("Directory does not exist: {}", imagesFolderPath);
            return List.of();
        }

        if (!folder.isDirectory()) {
            logger.error("Path is not a directory: {}", imagesFolderPath);
            return List.of();
        }

        File[] files = folder.listFiles((dir, name) -> name.endsWith(".jpg") || name.endsWith(".png"));

        if (files == null || files.length == 0) {
            logger.warn("No image files found in folder: {}", imagesFolderPath);
        } else {
            logger.info("Found {} image files.", files.length);
        }

        List<String> imagePaths = Arrays.stream(files)
                .sorted((file1, file2) -> file1.getName().compareTo(file2.getName()))
                .map(file -> { 
                    String path ="/images/portfolio/" + file.getName();
                    logger.debug("Image found: {}", path);
                    return path;
                })
                .collect(Collectors.toList());
        logger.info("Returning {} image paths.", imagePaths.size());
        return imagePaths;
    }
}
