const skillsVar=document.querySelector("#skills");
skillsVar.addEventListener("click",()=>{
    body.style.backgroundImage="url('DeveloperMap.png')";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    body.style.backgroundSize="contain";
    body.style.backgroundPosition="center";
    main.innerHTML=`
        <div style="display:grid;grid-template-columns:auto auto;margin-left:100px;margin-right:100px;align-items:center;row-gap:80px;justify-content:space-between;">
            <div style="display:grid;grid-template-columns: 1fr;line-height: 20px;row-gap:30px;margin-top:40px;">
                    <div style="color:white;font-size:35px;font-weight: bold;"> SEN SKILLS</div>
                    <div style="font-weight: bold;font-size:18px;">Python(Django,Pyside6,...)<progress value="0.7" style="margin-left:15px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">HTML<progress value="0.9" style="margin-left:170px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">CSS<progress value="0.8" style="margin-left:187px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">JavaScript<progress value="0.5" style="margin-left:140px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">Java<progress value="0.3" style="margin-left:185px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">C++<progress value="0.3" style="margin-left:187px;"></progress></div>
            </div>
            <div style="display:grid;grid-template-columns: 1fr;line-height: 20px;row-gap:40px;margin-top:20px;margin-left:25px;">
                    <div style="color:white;font-size:35px;font-weight: bold;"> 3D Sculpting and Game Development SKILLS</div>
                    <div style="font-weight: bold;font-size:18px;">Development on Unity<progress value="0.7" style="margin-left:210px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">Blueprint Unreal Engine<progress value="0.6" style="margin-left:200px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">3D Sculpting on Blender<progress value="0.9" style="margin-left:200px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">3D Sculpting on ZRemesher<progress value="0.3" style="margin-left:180px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">3D animation character(Mixamo,Blender,Unity,..)<progress value="0.6" style="margin-left:20px;"></progress></div>
            
            </div>
             <div style="display:grid;grid-template-columns: 1fr;line-height: 20px;row-gap:25px;margin-top:40px;">
                    <div style="color:white;font-size:35px;font-weight: bold;"> Other SKILLS</div>
                    <div style="font-weight: bold;font-size:18px;">Product documents (MSWord,Wordpad,...)<progress value="0.8" style="margin-left:140px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">Product Presentations (PowerPoints , Gamma AI,Canvas,...)<progress value="0.8" style="margin-left:20px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">Make Flyers(Canvas)<progress value="0.6" style="margin-left:310px;"></progress></div>
                    
            
            </div>
            <div style="display:grid;grid-template-columns: 1fr;line-height: 20px;row-gap:50px;margin-top:30px;margin-left:25px;">
                    <div style="color:white;font-size:35px;font-weight: bold;"> Maintenance SKILLS</div>
                    <div style="font-weight: bold;font-size:18px;">Installing Operating Systems<progress value="0.8" style="margin-left:20px;"></progress></div>
                    <div style="font-weight: bold;font-size:18px;">Reparing Operating Systems<progress value="0.8" style="margin-left:20px;"></progress></div>
            </div>       
    
        </div>
    `;
});