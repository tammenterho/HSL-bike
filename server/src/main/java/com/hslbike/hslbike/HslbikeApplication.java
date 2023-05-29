package com.hslbike.hslbike;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
public class HslbikeApplication {

    public static void main(String[] args) {
        SpringApplication.run(HslbikeApplication.class, args);
    }

    @RestController
    public static class ViewController {
        @GetMapping(value = { "/", "/{[path:^(?!api$).*$}/**" })
        public ModelAndView forward() {
            return new ModelAndView("forward:/index.html");
        }
    }

    @RestController
    @RequestMapping("/api")
    public static class ApiController {
        @GetMapping("/")
        public String apiRoot() {
            return "Hello World";
        }
    }

    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> containerCustomizer() {
        return container -> {
            try {
                container.setAddress(InetAddress.getByName("0.0.0.0"));
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }
        };
    }
}
