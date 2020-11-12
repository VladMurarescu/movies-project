const movies = [
  {
    id: "1",
    title: " Super 8",
    category: "Action",
    images: {
      cardImage:
        "https://static.cinemagia.ro/img/db/movie/55/87/66/super-8-603075l.jpg",
      movieImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2011%2F06%2Fsuper-8-cast-portrait_610.jpg",
    },
    director: "J.J. Abrams",
    writers: "J.J. Abrams",
    cast:
      "Joel Courtney, Jessica Tuck, Joel McKinnon Miller, Ryan Lee, Zach Mills, Riley Griffiths, Gabriel Basso, Kyle Chandler, 	Ron Eldard, AJ Michalka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "2",
    title: "Strike!",
    category: "Comedy",
    images: {
      cardImage:
        "https://s.abcnews.com/images/Business/uaw-strike-02-zp-jt-190926_hpMain_4x3_992.jpg",
      movieImage:
        "https://www.calfac.org/sites/main/files/imagecache/lightbox/main-images/ready_to_strike.jpg",
    },
    director: "Sarah Kernochan",
    writers: "Sarah Kernochan",
    cast:
      "Kirsten Dunst, Gaby Hoffmann, Lynn Redgrave, Rachael Leigh Cook, Tom Guiry, Vincent Kartheiser, Monica Keena, Matthew Lawrence, Heather Matarazzo, Merritt Wever",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "3",
    title: "True Romance",
    category: "Drama",
    images: {
      cardImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/True_romance.jpg/220px-True_romance.jpg",
      movieImage:
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555388445/shape/mentalfloss/true_primary.jpg?itok=JQ57Gum1",
    },
    director: "Tony Scott",
    writers: "Quentin Tarantino",
    cast:
      "Christian Slater, Patricia Arquette, Dennis Hopper, 	Val Kilmer,Gary Oldman, Brad Pitt, Christopher Walken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "4",
    title: "X-Men",
    category: "SF",
    images: {
      cardImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/X-Men_-_Apocalypse.jpg/220px-X-Men_-_Apocalypse.jpg",
      movieImage: "https://img.gameme.eu/Movie/544446055.jpg",
    },
    director: "Bryan Singer",
    writers: " Tom DeSanto, Bryan Singer",
    cast:
      "Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen, 	James Marsden, Halle Berry,Anna Paquin,	Tyler Mane",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "5",
    title: "The Hurricane",
    category: "Sport",
    images: {
      cardImage:
        "https://images-na.ssl-images-amazon.com/images/I/513KNJVNBDL._AC_SY445_.jpg",
      movieImage:
        "https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2014/4/23/1398270515622/The-Hurricane-006.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=dde6b50fca6b374d2a59dde54748e0f2",
    },
    director: "Norman Jewison",
    writers: " Rubin 'Hurricane' Carter,  Sam Chaiton",
    cast:
      "Denzel Washington, Vicellous Shannon, Deborah Kara Unger, Liev Schreiber,John Hannah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "6",
    title: "Scream",
    category: "Horror",
    images: {
      cardImage:
        "https://upload.wikimedia.org/wikipedia/en/7/78/Scream_movie_poster.jpg",
      movieImage:
        "https://img1.looper.com/img/gallery/everything-we-know-about-the-new-scream-movie-so-far/intro-1574115283.jpg",
    },
    director: "Wes Craven",
    writers: "Kevin Williamson",
    cast:
      "Drew Barrymore, Roger Jackson, Kevin Patrick Walls, David Booth, Carla Hatley, Neve Campbell, Skeet Ulrich",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "7",
    title: "Taken",
    category: "Action",
    images: {
      cardImage: "https://upload.wikimedia.org/wikipedia/ro/2/27/Taken.jpg",
      movieImage:
        "https://img1.looper.com/img/uploads/2017/05/o-NEESON-facebook.jpg",
    },
    director: "Pierre Morel",
    writers: "Luc Besson, Robert Mark Kamen",
    cast:
      "Liam Neeson, Maggie Grace, Leland Orser, Jon Gries, David Warshofsky, Holly Valance, Katie Cassidy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
  {
    id: "8",
    title: "I'm Still Here",
    category: "Comedy",
    images: {
      cardImage: "https://i.ytimg.com/vi/3XRE6k5u3nM/movieposter.jpg",
      movieImage:
        "https://occ-0-1123-1567.1.nflxso.net/art/b883f/b541f889c1c338029ba6011923ef23f2afeb883f.jpg",
    },
    director: "Casey Affleck",
    writers: "Casey Affleck, Joaquin Phoenix",
    cast:
      "Joaquin Phoenix,	Antony Langdon, Carey Perloff, Larry McHale, Casey Affleck, Jack Nicholson, Billy Crystalh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elementum felis sit amet ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at tortor diam. Vivamus sagittis nisi sem, at gravida dolor molestie ut. Morbi sodales dui at elit pharetra, non porta mi vestibulum. Mauris hendrerit scelerisque quam, quis tempus sapien sodales eget. Donec commodo molestie lectus, eu tincidunt sem varius id. Donec sed bibendum dolor. Integer venenatis est non risus varius sagittis. Vestibulum sit amet accumsan ante. Donec tempus euismod auctor. Nullam quis ante at orci accumsan faucibus quis sollicitudin arcu. Morbi.",
  },
];

export default movies;
