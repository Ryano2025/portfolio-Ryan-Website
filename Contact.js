const contactVar=document.querySelector("#Contact");
contactVar.addEventListener("click",()=>{
    body.style.backgroundImage="url('DeveloperMap.png')";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    body.style.backgroundSize="contain";
    body.style.backgroundPosition="right";
    main.innerHTML=`
        <div style="width:50%;display:grid;grid-columns-template:1fr;row-gap:20px;margin-top:20px;">
                <div style="display:grid;grid-template-columns: auto 460px;background-color:darkblue;;width:1000px;border-radius:30px;"><div><img src="tel.png" style="height:200px;width: 200px;object-fit:cover;margin-left:10px;margin-right:15px;"></div><div style="margin-top:80px;text-align:left;font-weight:bold;color:white;font-size:30px;"><a href="tel:+237695225607">+237 6 95 22 56 07</a></div></div>
                <div style="display:grid;grid-template-columns: auto 460px;width:1000px;background-color:darkblue;border-radius:30px;"><div><img src="email.png" style="height:200px;width: 200px;object-fit:cover;margin-left:10px;margin-right:15px;"></div><div style="margin-top:80px;text-align:left;font-weight:bold;color:white;font-size:30px;"><a href="mailto:fosso.david@ictuniversity.edu.cm">fosso.david@ictuniversity.edu.cm </a> <a href="mailto:fossokoagne@gmail.com">fossokoagne@gmail.com</a></div></div>
                <div style="display:grid;grid-template-columns: auto 460px;width:1000px;background-color:darkblue;border-radius:30px;"><div><img src="insta.png" style="height:200px;width: 200px;object-fit:cover;margin-left:10px;margin-right:15px;"></div><div style="margin-top:80px;text-align:left;font-weight:bold;color:white;font-size:30px;"><a href="https://www.instagram.com/loantomryan/">@loantomryan</a></div></div>
        </div>
    `;
});