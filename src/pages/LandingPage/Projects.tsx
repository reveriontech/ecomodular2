import s from './scss/_projects.module.scss'
import apartmentsImg from '@/assets/buildings/Ecomodular-Projects-apartments.jpg'
import hotelsImg from '@/assets/buildings/Ecomodular-Projects-hotels.jpg'
import residentialHousingImg from '@/assets/buildings/Ecomodular-Projects-residential-housing.jpg'
import schoolsImg from '@/assets/buildings/Ecomodular-Projects-schools.jpg'
import studentAccommodationImg from '@/assets/buildings/Ecomodular-Projects-student-accomodation.jpg'
import nursingHomesImg from '@/assets/buildings/Ecomodular-Projects-Nursing-home.jpg'

const projects = [
    {
        name: 'APARTMENTS',
        image: apartmentsImg
    },
    {
        name: 'HOTELS',
        image: hotelsImg
    },
    {
        name: 'RESIDENTIAL HOUSING',
        image: residentialHousingImg
    },
    {
        name: 'SCHOOL',
        image: schoolsImg
    },
    {
        name: 'STUDENT ACCOMMODATION',
        image: studentAccommodationImg
    },
    {
        name: 'NURSING HOMES',
        image: nursingHomesImg
    }
]

const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <p> Projects </p>
                </div>

                <div className={s.pictures}>
                    {projects.map((project, index) => (
                        <div key={index} className={s.projectCard}>
                            <div className={s.imageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className={s.image}
                                />
                                <div className={s.titleOverlay}>
                                    <h3 className={s.projectTitle}>{project.name}</h3>
                                </div>
                                <div className={s.overlay}>
                                    <div className={s.content}>
                                        <h3 className={s.projectTitle}>{project.name}</h3>  
                                        <button className={s.seeMoreBtn}>See more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects