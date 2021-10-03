window.onload = home_content();

function home_content(){
    images = [
        {
            id: 1,
            img: "../assets/home/img1.jpg",
            title: "North Shore Preserve",
            subtitle: "Kaua'i, Hawaii"
        },
        {
            id: 2,
            img:"../assets/home/img2.jpg",
            title: "James Island",
            subtitle: "Southern Gulf Islands, British Columbia, Canada"
        },
        {
            id: 3,
            img:"../assets/home/img3.jpg",
            title: "CostaTerra",
            subtitle: "Comporta, Portugal"
        },
        {
            id: 4,
            img:"../assets/home/img4.jpg",
            title: "Barbuda Ocean Club",
            subtitle: "Barbuda, West Indies"
        },
        {
            id: 5,
            img:"../assets/home/img5.jpg",
            title: "Driftwood",
            subtitle: "Austin, Texas"
        },
        {
            id: 6,
            img:"../assets/home/img6.jpg",
            title: "Troubadour",
            subtitle: "Nashville, Tennessee"
        },
        {
            id: 7,
            img:"../assets/home/img7.jpg",
            title: "Playa Grande",
            subtitle: "Rio San Juan, Dominican Republic"
        },
        {
            id: 8,
            img:"../assets/home/img8.jpg",
            title: "Chileno Bay",
            subtitle: "Cabo San Lucas, Mexico"
        },
        {
            id: 9,
            img:"../assets/home/img9.jpg",
            title: "The Summit",
            subtitle: "Las Vegas, Nevada"
        },
        {
            id: 10,
            img:"../assets/home/img10.jpg",
            title: "Dune Deck",
            subtitle: "Westhampton Beach, NY"
        },
        {
            id: 11,
            img:"../assets/home/img11.jpg",
            title: "Silo Ridge",
            subtitle: "Amenia, New York"
        },
        {
            id: 12,
            img:"../assets/home/img12.jpg",
            title: "Mākena",
            subtitle: "Maui, Hawaii"
        },
        {
            id: 13,
            img:"../assets/home/img13.jpg",
            title: "Yellowstone Club",
            subtitle: "Big Sky, Montana"
        },
        {
            id: 14,
            img:"../assets/home/img14.jpg",
            title: "Gozzer Ranch",
            subtitle: "Coeur d’Alene, Idaho"
        },
        {
            id: 15,
            img:"../assets/home/img15.jpg",
            title: "El Dorado",
            subtitle: "Los Cabos, Mexico"
        },
        {
            id: 16,
            img:"../assets/home/img16.jpg",
            title: "Madison",
            subtitle: "La Quinta, California"
        },
        {
            id: 17,
            img:"../assets/home/img17.jpg",
            title: "Baker's Bay",
            subtitle: "Great Guana Cay, Bahamas"
        },
        {
            id: 18,
            img:"../assets/home/img18.jpg",
            title: "Hideaway",
            subtitle: "La Quinta, California"
        },
        {
            id: 19,
            img:"../assets/home/img19.jpg",
            title: "Mountaintop",
            subtitle: "Cashiers, North Carolina"
        },
        {
            id: 20,
            img:"../assets/home/img20.jpg",
            title: "Mirabel",
            subtitle: "Scottsdale, Arizona"
        },
        {
            id: 21,
            img:"../assets/home/img21.jpg",
            title: "Kūki'o",
            subtitle: "Kohala, Hawaii"
        },
        {
            id: 22,
            img:"../assets/home/img22.jpg",
            title: "Vaquero",
            subtitle: "Westlake, Texas"
        },
        {
            id: 23,
            img:"../assets/home/img23.jpg",
            title: "Iron Horse",
            subtitle: "Whitefish, Montana"
        },
        {
            id: 24,
            img:"../assets/home/img24.jpg",
            title: "CordeValle",
            subtitle: "Silicon Valley, California"
        },
        {
            id: 25,
            img:"../assets/home/img25.jpg",
            title: "Estancia",
            subtitle: "Scottsdale, Arizona"
        }
    ]

    var content = '';
    
    images.forEach(element => {
        content += `<div class="trails">
        <img img="${element.img}"  alt="">
        <div class="trail_titles">
            <h1 class="main_title">${element.title}</h1>
            <p class="sub_title">${element.subtitle}</p>
        </div>
    </div>`
    });
    
    document.querySelector('.img_track').innerHTML = content;

}





function videoImage1() {
    const content = `<div video1">
    <video class="img_v1" img="../assets/home/video1.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video1').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Experiences</h1>
  <p class="p_text">
    Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video1').innerHTML = content;

}

function videoImage2() {
    const content = `<div video1">
    <video class="img_v2" img="../assets/home/video2.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video2').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Lifestyle</h1>
  <p class="p_text">
  Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences. 
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video2').innerHTML = content;

}

function videoImage3() {
    const content = `<div video1">
    <video class="img_v3" img="../assets/home/video3.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video3').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Wellness</h1>
  <p class="p_text">
  Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video3').innerHTML = content;

}