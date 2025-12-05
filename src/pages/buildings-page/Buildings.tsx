import s from './scss/_building.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// Import all images
// Hotels and Resorts
import hotel1 from '@/assets/buildings/1-Hotel.jpg'
import hotel2 from '@/assets/buildings/Ecomodular-Hotels-2.jpg'
import hotel4 from '@/assets/buildings/Ecomodular-Hotels-4.jpg'
import hotel5 from '@/assets/buildings/Ecomodular-Hotels-5.jpg'
import hotelProjects from '@/assets/buildings/Ecomodular-Projects-hotels.jpg'

// Apartments
import apartmentsProjects from '@/assets/buildings/Ecomodular-Projects-apartments.jpg'
import apartments1 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-1.jpg'
import apartments2 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-2.jpg'
import apartments3 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-3.jpg'
import apartments4 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-4.jpg'
import apartments5 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-5.jpg'
import apartments7 from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS-7.jpg'
import apartmentsMain from '@/assets/buildings/GENERIC-MODULAR-APARTMENTS.jpg'

// Nursing Homes
import nursing1 from '@/assets/buildings/Nursing1.1.jpg'
import nursing2 from '@/assets/buildings/Nursing1.2.jpg'
import nursing3 from '@/assets/buildings/Nursing1.3.jpg'
import nursing4 from '@/assets/buildings/Nursing1.4.jpg'
import nursing5 from '@/assets/buildings/Nursing1.5.jpg'

// Social House
import social1 from '@/assets/buildings/SocialHouse1.1.jpg'
import social2 from '@/assets/buildings/SocialHouse1.2.jpg'
import social3 from '@/assets/buildings/SocialHouse1.3.jpg'
import social4 from '@/assets/buildings/SocialHouse1.4.jpg'
import social5 from '@/assets/buildings/SocialHouse1.5.jpg'

// Student Accommodation
import student1 from '@/assets/buildings/StudentAccommodation1.1.jpg'
import student2 from '@/assets/buildings/StudentAccommodation1.2.jpg'
import student3 from '@/assets/buildings/StudentAccommodation1.3.jpg'
import student4 from '@/assets/buildings/StudentAccommodation1.4.jpg'
import student5 from '@/assets/buildings/StudentAccommodation1.5.jpg'

// Bathroom Pods
import bathroom1 from '@/assets/buildings/BathroomsPods1.1.jpg'
import bathroom2 from '@/assets/buildings/BathroomsPods1.2.jpg'
import bathroom3 from '@/assets/buildings/BathroomsPods1.3.jpg'
import bathroom4 from '@/assets/buildings/BathroomsPods1.4.jpg'
import bathroom5 from '@/assets/buildings/BathroomsPods1.5.jpg'

interface BuildingData {
    title: string
    description: string
    pictures: string[]
}

const buildingsData: BuildingData[] = [
    {
        title: 'Hotels',
        description: `EcoModular offers high-rise buildings for different types of facilities based on a durable, reliable, and life-lasting steel frame. Modular solutions for Hotels and Resorts, where modular construction time saving and labor efficiency, can provide additional cost savings. Among other things, the modular construction ensures the spectacular acoustic parameters inside the room, guaranteeing a comfortable stay.

Modular hotel construction is a growing trend in Hospitality, that has become popular worldwide. By using modular construction efficiently Hotel owners and developers can build and open the project 30-50% faster than with conventional construction methods. First, time savings are achieved by eliminating such adverse factors as the influence of weather, transport and delays of supply, labor shortage and other factors for construction. Modules are produced in the safe close factory environment in parallel with other stages of the site works and will be delivered on time, according to the project plan. The next step is fast on-site installation, with minimal environmental impact and disturbance to the neighboring buildings.

EcoModular proposes a wide choice of finishing options according to the project level. Prefabricated fully equipped and prefinished modules, with all furniture and bathroom appliances installed in the factory will ensure that every room meets your guests' expectations.`,
        pictures: [hotel1, hotel2, hotel4, hotel5, hotelProjects]
    },
    {
        title: 'Apartments',
        description: `EcoModular offers new modular apartments product, available at competitive prices to be produced at your envisaged land plot already during 2023!

Generic Modular Apartments (GMA) – a unique solution for real-estate developers and construction companies, guaranteeing fast construction and safe investments.

EcoModular GMA projects meet the highest requirements for construction, finishing quality, and adherence to local standards and regulations of rental apartments and comfort living. Our concept offers an optimal solution, significantly reducing construction time that allows developers and investors to quickly realize construction projects, providing the safest and most reliable way of their investments.

Additionally, the project allows meeting the so important and demanded environmental requirements. Generic modular construction standardization improves sustainability through better material use and faster on-site assembly.`,
        pictures: [apartmentsProjects, apartments1, apartments2, apartments3, apartments4, apartments5, apartments7, apartmentsMain]
    },
    {
        title: 'Nursing Homes',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque odio. Aenean ultrices vehicula pellentesque. Ut et elementum leo. Morbi eu tempus odio. Etiam rutrum blandit nibh, ut cursus nulla tempor id. Sed sed risus aliquet, pharetra mauris pulvinar, euismod ipsum. Pellentesque mattis diam id ipsum elementum euismod. Suspendisse vestibulum, nisi sit amet tempus molestie, dolor nunc sagittis nisl, non consectetur nunc purus in lectus.

Praesent facilisis justo tempus massa vehicula eleifend ac nec tellus. Sed sagittis enim sit amet orci varius, a feugiat libero gravida. Nam dictum sem in est sollicitudin fringilla. Aliquam accumsan massa consectetur metus pharetra vulputate. Pellentesque feugiat, tellus nec venenatis semper, enim nulla iaculis lorem, eget interdum nisi urna sit amet nibh. Proin luctus leo vel ultricies finibus. Maecenas finibus ex vel nunc venenatis, pharetra vestibulum ex imperdiet. Suspendisse ac ultrices sem. Integer tellus velit, pellentesque eu consequat eget, condimentum ut elit. In pretium enim nec leo maximus, quis volutpat nibh pulvinar. Fusce augue justo, tempus nec dignissim pellentesque, tincidunt ut nulla. Maecenas eget lacinia urna. Sed volutpat molestie consectetur.`,
        pictures: [nursing1, nursing2, nursing3, nursing4, nursing5]
    },
    {
        title: 'Social Housing',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque odio. Aenean ultrices vehicula pellentesque. Ut et elementum leo. Morbi eu tempus odio. Etiam rutrum blandit nibh, ut cursus nulla tempor id. Sed sed risus aliquet, pharetra mauris pulvinar, euismod ipsum. Pellentesque mattis diam id ipsum elementum euismod. Suspendisse vestibulum, nisi sit amet tempus molestie, dolor nunc sagittis nisl, non consectetur nunc purus in lectus.

Praesent facilisis justo tempus massa vehicula eleifend ac nec tellus. Sed sagittis enim sit amet orci varius, a feugiat libero gravida. Nam dictum sem in est sollicitudin fringilla. Aliquam accumsan massa consectetur metus pharetra vulputate. Pellentesque feugiat, tellus nec venenatis semper, enim nulla iaculis lorem, eget interdum nisi urna sit amet nibh. Proin luctus leo vel ultricies finibus. Maecenas finibus ex vel nunc venenatis, pharetra vestibulum ex imperdiet. Suspendisse ac ultrices sem. Integer tellus velit, pellentesque eu consequat eget, condimentum ut elit. In pretium enim nec leo maximus, quis volutpat nibh pulvinar. Fusce augue justo, tempus nec dignissim pellentesque, tincidunt ut nulla. Maecenas eget lacinia urna. Sed volutpat molestie consectetur.`,
        pictures: [social1, social2, social3, social4, social5]
    },
    {
        title: 'Student Accommodation',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis neque odio. Aenean ultrices vehicula pellentesque. Ut et elementum leo. Morbi eu tempus odio. Etiam rutrum blandit nibh, ut cursus nulla tempor id. Sed sed risus aliquet, pharetra mauris pulvinar, euismod ipsum. Pellentesque mattis diam id ipsum elementum euismod. Suspendisse vestibulum, nisi sit amet tempus molestie, dolor nunc sagittis nisl, non consectetur nunc purus in lectus.

Praesent facilisis justo tempus massa vehicula eleifend ac nec tellus. Sed sagittis enim sit amet orci varius, a feugiat libero gravida. Nam dictum sem in est sollicitudin fringilla. Aliquam accumsan massa consectetur metus pharetra vulputate. Pellentesque feugiat, tellus nec venenatis semper, enim nulla iaculis lorem, eget interdum nisi urna sit amet nibh. Proin luctus leo vel ultricies finibus. Maecenas finibus ex vel nunc venenatis, pharetra vestibulum ex imperdiet. Suspendisse ac ultrices sem. Integer tellus velit, pellentesque eu consequat eget, condimentum ut elit. In pretium enim nec leo maximus, quis volutpat nibh pulvinar. Fusce augue justo, tempus nec dignissim pellentesque, tincidunt ut nulla. Maecenas eget lacinia urna. Sed volutpat molestie consectetur.`,
        pictures: [student1, student2, student3, student4, student5]
    },
    {
        title: 'Bathroom Pods',
        description: `EcoModular designs and manufactures prefabricated bathroom units for hotels, apartments, commercial and residential buildings, healthcare facilities, nursing homes, and more. EcoModular bathroom PODs are designed and built under strictly controlled conditions and shipped as complete assembled units from our factories. The bathroom PODs are constructed from steel profiles, with high-performance interior panels or any other finishes according to the customer request. The bathroom PODs provide excellent fire and acoustic rating possibilities and are completed with all accessories as per client specifications.`,
        pictures: [bathroom1, bathroom2, bathroom3, bathroom4, bathroom5]
    }
]

const Buildings = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
    const [searchParams] = useSearchParams()

    // Get filter from URL query parameter
    const filterParam = searchParams.get('filter')

    // Filter buildings data based on query parameter
    const filteredBuildings = filterParam
        ? buildingsData.filter(building => {
            const normalizedFilter = filterParam.toLowerCase().trim()
            const normalizedTitle = building.title.toLowerCase().trim()

            // Handle different name variations
            // e.g., "HOTELS" should match "Hotels", "Social Housing" should match "Social House"
            return normalizedTitle === normalizedFilter ||
                normalizedTitle.includes(normalizedFilter) ||
                normalizedFilter.includes(normalizedTitle)
        })
        : buildingsData

    useEffect(() => {
        const currentRef = sectionRef.current
        if (!currentRef) return

        const sections = currentRef.querySelectorAll(`.${s.buildingSection}`)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0')
                        setVisibleSections((prev) => new Set(prev).add(index))
                    }
                })
            },
            {
                threshold: 0.2
            }
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            })
        }
    }, [])

    const formatDescription = (description: string) => {
        return description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
        ))
    }

    return (
        <div ref={sectionRef} className={s.buildings}>
            <div className={s.wrapper}>
                {filteredBuildings.map((building, index) => {
                    const mainImage = building.pictures[0]
                    const gridImages = building.pictures.slice(1, 5)
                    const isVisible = visibleSections.has(index)
                    const isReversed = index % 2 === 1 // Odd indices (1, 3, 5) show images on right

                    return (
                        <section
                            key={index}
                            data-index={index}
                            className={`${s.buildingSection} ${isVisible ? s.visible : ''} ${isReversed ? s.reversed : ''}`}
                        >
                            <div className={s.contentWrapper}>
                                {/* Left Side - Images */}
                                <div className={s.imagesContainer}>
                                    {/* Main Image */}
                                    <div className={s.mainImageWrapper}>
                                        <img
                                            src={mainImage}
                                            alt={building.title}
                                            className={s.mainImage}
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Image Grid */}
                                    {gridImages.length > 0 && (
                                        <div className={s.imageGrid}>
                                            {gridImages.map((image, imgIndex) => (
                                                <div key={imgIndex} className={s.gridImageWrapper}>
                                                    <img
                                                        src={image}
                                                        alt={`${building.title} ${imgIndex + 2}`}
                                                        className={s.gridImage}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right Side - Title and Description */}
                                <div className={s.textContainer}>
                                    <h2 className={s.title}>{building.title}</h2>
                                    <div className={s.description}>
                                        {formatDescription(building.description)}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Buildings
