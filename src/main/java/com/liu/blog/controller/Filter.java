package com.liu.blog.controller;

import com.liu.blog.entity.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "Filter", urlPatterns = "/*")
public class Filter implements javax.servlet.Filter {

    String NO_LOGIN = "您还没有登录";

    String[] includeUrls = new String[]{"/login", "/register", "/", "/info", "/showArticle"};


    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) req;
        HttpServletResponse httpServletResponse = (HttpServletResponse) resp;

        HttpSession session = httpServletRequest.getSession();
        String url = httpServletRequest.getRequestURI();
        boolean needFilter = isNeedFilter(url);

        System.out.println(url);

//        静态
//        if (url.endsWith(".css") || url.endsWith(".js") || url.endsWith(".jpg") || url.endsWith(".png")) {
//            chain.doFilter(req, resp);
//            return;
//        }

//        if(!httpServletRequest.getRequestURI().contains("favicon.ico")){
//            System.out.println(httpServletRequest.getRequestURI());
//            chain.doFilter(req,resp);
//            return;
//        }

//        if (!needFilter) {
//            chain.doFilter(req, resp);
//        } else {
//            User user = (User) session.getAttribute("user");
//            if (user != null) {
//                chain.doFilter(req, resp);
//            } else {
//                String requestType = httpServletRequest.getHeader("X-Requested-With");
////            是否为ajax
//                if ("XMLHttpRequest".equals(requestType)) {
//                    httpServletResponse.getWriter().write(this.NO_LOGIN);
//                } else {
//                    httpServletResponse.sendRedirect(httpServletRequest.getContextPath() + "/login");
//                }
//            }
//            return;
//        }

        if (!url.contains("login")&&!url.contains("index")&&!url.contains("userIndex")
                &&!url.contains("static")&&!url.contains(".js")&&!url.contains(".css")&&!url.contains(".jpg")&&!url.contains(".png")
                &&!url.contains("showArticle")&&!url.contains("register")&&!url.contains("adminLogin")
                &&!url.contains("search")&&!url.endsWith("/")
        ) {
            User user = (User) session.getAttribute("user");
            if (user == null ) {
                httpServletResponse.sendRedirect("login");
                return;
            }
        }

        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }


    public boolean isNeedFilter(String url) {
        for (String includeUrl : includeUrls) {
            if (includeUrl.equals(url)) {
                return false;
            }
        }
        return true;
    }

}
