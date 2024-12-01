package com.samuelsjoen.backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PortfolioController {

    @GetMapping("/api/portfolio")
    @ResponseBody
    public List<String> getImageFilenames() {
        String imagesFolderPath = "src/main/resources/static/images/portfolio";
        File folder = new File(imagesFolderPath);

        File[] files = folder.listFiles((dir, name) -> name.endsWith(".jpg") || name.endsWith(".png"));

        return Arrays.stream(files)
                .map(File::getName)
                .collect(Collectors.toList());
    }
}
