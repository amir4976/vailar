import style from './Project.module.css'
import Title from '../Title/Title'
import ProjectCard from '../ProjectSwiper/ProjectCard'

function Project() {
  return (
    <div className={style.projcetLanding}>
        <Title title={'پروژ های ما '} desc={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'}/>
       
       <div className={`row ${style.projectLanidngCard}`}>

        <ProjectCard title={'my name'} image={'/ben-sweet-2LowviVHZ-E-unsplash.jpg'}/>
        <ProjectCard title={'my name'} image={'/ben-sweet-2LowviVHZ-E-unsplash.jpg'}/>
        <ProjectCard title={'my name'} image={'/ben-sweet-2LowviVHZ-E-unsplash.jpg'}/>
        <ProjectCard title={'my name'} image={'/ben-sweet-2LowviVHZ-E-unsplash.jpg'}/>

       </div>
    
    
    
    
    </div>
  )
}

export default Project
