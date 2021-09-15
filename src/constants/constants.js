export const projects = [
  {
    title: 'Transcendence',
    description: "Using NextJS, Nest.js & PostgreSQL, I built a full Stack multiplayer live game(pong) website - with live chat and user status (online/offline/ingame), options to create channels, add friends, block users, send game requests, random game pairing, 2-Step Verification, OAuth system Register/Login.",
      image: '/images/1.png',
      tags: ['PostgreSQL,', 'NextJS,', 'NestJS,', 'Docker.'],
    source: 'https://github.com/jimi-1337/Final_Transcendence',
    visit: '',
    id: 0,
    type:"Full Stack"
  },
  {
    title: 'HTTP WebServer',
    description:"Using C++ only, we built a fully running HTTP/1.1 WebServer from scratch, Handling the main HTTP requests type (GET - POST - PUT - DELETE - TRACE - OPTIONS) and running custom CGI passed in the config file(PHP/Python...), This was a group project (two participants).",
    image: '/images/http.png',
    tags: ['C++'],
    source: 'https://github.com/jimi-1337/WebServ',
    visit: '',
    id: 1,
    type:"Software"
  },
  {
    title: 'C++ Containers',
    description: "In this project, I re-implemented the various container types of the C++ standard template library, the re-implemented containers: Vector, List, Map, Multimap, Queue, Deque",
      image: '/images/containers.JPG',
      tags: ['C++'],
    source: 'https://github.com/jimi-1337/ft_containers',
    visit: '',
    id: 2,
    type:"Software"
  },
  {
    title: 'FT Services',
    description: "This is a System Administration and Networking project, this project consists of setting up an infrastructure of different service using Kubernetes, setting up a multi-service cluster, Each service is running in a dedicated container, the running services are: WordPress, phpMyAdmin, nginx, FTPS, Grafana, InfluxDB, Mysql",
    image: '/images/ft_services.png',
    tags: ['Kubernetes,', 'Wordpress,', 'PhpMyadmin,', 'Nginx.'],
    source: 'https://github.com/jimi-1337/ft_services',
    visit: '',
    id: 3,
    type:"Stack / System Administration and Networking"
  }
  ,
  {
    title: 'Minishell',
    description: "I created a shell with insperation from Zsh and Bash, with the following built-in commands: echo - cd - pwd - export - unset - env - exit, and all the other commands are running with execve.",
    image: '/images/bash.png',
    tags: ['C,', 'Threads,', 'Fork,', 'Mutex.'],
    source: 'https://github.com/jimi-1337/minishell',
    visit: '',
    id: 4,
    type:"Software"
  },
  {
    title: 'Cube3D',
    description: "This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. We explored ray-casting. Our goal was to make a dynamic 3D view inside a maze (using C language), in which we ll have to find our way.",
    image: '/images/Cub3D.jpg',
    tags: ['C,', 'mlx,'],
    source: 'https://github.com/jimi-1337/Cub3D',
    visit: '',
    id: 5,
    type:"Software"
  },
  {
    title: 'Dining Philosophers',
    description: "Solving the dining Philosophers dilemma, using threads in c",
    image: '/images/dining-philosophers.jpg',
    tags: ['C,', 'Threads,', 'Fork,', 'Mutex,'],
    source: 'https://github.com/LayeredChoas/Philosophers',
    visit: '',
    id: 6,
    type:"Software"
  },
  {
    title: 'Docker Server',
    description: "System Administration Project, where I worked with docker to set up a webserver, This server is running multiple services: Wordpress, phpMyAdmin, and a SQL database with nginx",
    image: '/images/docker.webp',
    tags: ['Docker', 'Nginx', 'Wordpress', 'phpMyAdmin'],
    source: 'https://github.com/jimi-1337/Ft_server',
    visit: '',
    id: 7,
    type:"Stack / System Administration"
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my programming journey, with html/css', },
  { year: 2018, text: 'freelancing as a web developer', },
  { year: 2019, text: 'Started studying in 1337 and deep learning on C', },
  { year: 2020, text: 'Dove into docker and kuberneteis world', },
  { year: 2021, text: 'Building experience as Full Stack Developer', },
];

export const mine = {me : '/images/ayoub.jpeg'}