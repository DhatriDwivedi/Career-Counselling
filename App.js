import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <React.Fragment>
    <h1 className="text-center text-danger text-capitalize my=5">Articles</h1>
    <div className="container text-center">
  <div className="row">
    <div className="col">
     <div class="card" >
  <img src="https://ypspatiala.in/blog/wp-content/uploads/2020/02/career-counselling.jpg"  class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">The importance of career counselling in today’s time</h5>
    <p class="card-text">In today’s extremely tough competitive world people are continuously losing hope to survive on this planet, due to various reasons like large population, tough competitions, and various difficulties that children are facing but gradually students are realizing that they want to pursue a career in which they are passionate about.</p>
    <a href="https://timesofindia.indiatimes.com/readersblog/aadityakanchanblogs/the-importance-of-career-counselling-in-todays-time-32875/" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
    <div className="col">
     <div class="card" >
  <img src="https://www.brainchecker.in/assets/front/images/career-counsellors-in-nashik.jpg" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Challenges and opportunities in efforts towards inclusive education: reflections from India</h5>
    <p class="card-text">Across the globe, the Salamanca Statement has provided the strongest impetus for drawing attention to the education of some of the most marginalised groups. In India, it has had a significant and specific impact on the provision of schooling opportunities for children with disabilities.</p>
    <a href="https://www.tandfonline.com/doi/full/10.1080/13603116.2019.1624845?src=recsys" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
    <div className="col">
     <div class="card" >
  <img src="https://d3bat55ebwjhsf.cloudfront.net/expert-article/user_abhilasharai29%40gmail.comrai/career_counselling_for_students.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Increasing students’ career readiness through career guidance</h5>
    <p class="card-text">Career guidance in this sense describes a range of school-based interventions which seek to prepare young people for their transition to their post-secondary school lives and to empower them to be successful in their lives and careers.</p>
    <a href="https://www.tandfonline.com/doi/full/10.1080/03069885.2021.1937515" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
  </div>
</div>

  </React.Fragment>;
};
export default App;
