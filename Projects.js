
const ProjectsVar=document.querySelector("#Projects");
ProjectsVar.addEventListener("click",()=>{
    body.style.backgroundImage="url('DeveloperMap.png')";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    body.style.backgroundSize="contain";
    body.style.backgroundPosition="center";
    main.innerHTML=`
        <div style="display:grid;grid-template-columns:200px 200px;justify-content:space-between;margin-left:100px;margin-right:100px;align-items:center;">
            <div><img src="ecommerce.png" style="height:150px;width:150px;"><div style="text-align:center;margin-right:40px;width:160px;">E-commerce Website (DocShop:for formation)</div></div>
            <div><img src="portfolio.png" style="height:150px;width:150px;"><div style="text-align:center;width:160px;">PortFolio Website (for formation and professional goals)</div></div>
            <div><img src="ecommerce.png" style="height:150px;width:150px;"><div style="text-align:center;width:160px;">Mini rock-papers-scissors game on a Website</div></div>
            <div><img src="3D.png" style="height:150px;width:150px;"><div style="text-align:center;width:160px;">3D Character for my future  3D game I want to develop </div></div>
            <div><img src="ecommerce.png" style="height:150px;width:150px;"><div style="text-align:center;width:160px;"><div style="font-size:18px;font-weight:bold;">Up-Coming</div> Create a Website to sell cars and electronics machines for my father bussiness</div></div>
            <div><img src="3D.png" style="height:150px;width:150px;"><div style="text-align:center;width:160px;"><div style="font-size:18px;font-weight:bold;">Up-Coming</div>Develop a  3D video game on Unity 7.0 that will be published on the Epic games Platform</div></div>
    
        </div>
    
    `;
});