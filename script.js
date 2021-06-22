$(document).ready(function() {
    //toggle nav in mobile view
    $('body').on('click' , '#mobile-nav-btn' , function() {
        $('aside').toggleClass('show');
        $(this).toggleClass('rotate');
    })
    //init smooth scroll
    $(function () {
        var scroll = new SmoothScroll('a[href*="#section-"]');
      });

      //fetching the projects from the API
      let url = 'https://ancient-lowlands-91856.herokuapp.com/api/projects';
      let output = "";
      $.ajax({
          url: url,
          type:"GET"
      }).done(function(response) {
          response.forEach(element => {
              output += `
                    <div class="single-project mb-4">
                    <div class="project-img">
                        <img src="${element.imgUrl}" alt="project-img" class="img-fluid"> 
                    </div>
                    <div class="project-text">
                        <h4>${element.name}</h4>
                        <p class="m-0">${element.desc}</p>
                        <div class="project-nav">
                            <a href="${element.url}" target = _blank><i class="fas fa-eye"></i> Demo</a>
                            <a href="${element.githubUrl}" target = _blank><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                    </div> 
              `;
          });
          $('.projects-container').append(output);
      });
});


{/* <div class="single-project mb-4">
<div class="project-img">
    <img src="${element.imgUrl}" alt="project-img" class="img-fluid"> 
</div>
<div class="project-text">
   <h4>${element.name}</h4>
   <p class="m-0">${element.desc}</p>
    <div class="project-nav">
        <a href="${url}"><i class="fas fa-eye"></i> Demo</a>
        <a href="${githubUrl}"><i class="fab fa-github"></i> Code</a>
    </div>
</div>
</div> */}