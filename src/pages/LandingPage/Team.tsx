import { useState, Fragment, useMemo, useCallback, useEffect, useRef } from 'react'
import { ChevronDown, X } from 'lucide-react'
import s from './scss/_team.module.scss'

// Team member images
import edvinasCinga from '@/assets/teams/Edvinas-Cinga-CEO.jpg'
import niallShanahan from '@/assets/teams/Nial-Shanahan.jpg'
import vygaDambrauskas from '@/assets/teams/Sample-Person---Team2.jpg'
import kealanMcCluskey from '@/assets/teams/Kealan-Mc-Cluskey---CTO.jpg'
import terryHutt from '@/assets/teams/Team4.jpg'
import sameerDababneh from '@/assets/teams/Sameer-Dababneh-Team1.jpg'
import mandhirSidhu from '@/assets/teams/Mandhir-Sidhu-SalesDirector.jpg'
import andrew from '@/assets/teams/Andrew-Manager.jpg'

interface TeamMember {
    name: string
    position: string
    image: string
    description: string | null
}

const teamMembers: TeamMember[] = [
    {
        name: 'Edvinas Cinga',
        position: 'Founder & Chief Executive Officer',
        image: edvinasCinga,
        description: `Edvinas Cinga is a visionary businessman and the founder of Eco House Developments Limited, a pioneering company in sustainable and eco-friendly construction. With a passion for environmentally conscious and sustainable living, Edvinas has dedicated his career to revolutionizing the way we build and inhabit our homes.

Born with an entrepreneurial spirit, Edvinas embarked on his professional journey working in diverse construction projects, understanding the full process of construction end to end. Recognizing the pressing need for swift and sustainable housing solutions, he founded Eco House Developments Limited with the mission to create innovative, energy-efficient, and environmentally friendly homes.

Under Edvinas' leadership, Eco House Developments Limited has become a leading force in the construction industry, setting new standards for eco-conscious development. Edvinas and his team utilize cutting-edge technologies, renewable energy systems, and sustainable building materials to minimize the environmental impact of their projects, reducing construction time onsite while also maximizing energy efficiency and comfort for residents.

Edvinas' commitment to sustainability extends beyond his business ventures. He actively promotes environmental awareness and advocates for responsible construction practices. Through partnerships and research in green initiatives, Edvinas strives to inspire positive change and foster a greener future.

Recognized for his contributions to sustainable development, Edvinas Cinga is a respected figure in both the business and environmental communities. His dedication, innovative thinking, and unwavering commitment to sustainability continue to shape the construction industry, paving the way for a more sustainable and environmentally conscious approach to housing.

Outside of his professional endeavours, Edvinas enjoys spending time with his family in nature, travelling and exploring new sustainable technologies, researching new business opportunities. He is an inspiration to aspiring entrepreneurs and environmentalists alike, reminding us of the immense impact that individuals can make in creating a better world for future generations.`
    },
    {
        name: 'Niall Shanahan',
        position: 'Founder & Director',
        image: niallShanahan,
        description: `Niall is a commercial property specialist and holds a BSc in Property Economics. His career spans 30 years in multiple industries including Commercial Real Estate and Foreign Direct Investment sectors acting as owner's representative for many of America's Fortune 500 companies to establish their businesses in Ireland and Europe.

He is a Director and partner of EnigmaSoft, a cybersecurity anti-virus SaaS company.

Niall also acts as a non-executive director for a number of technology companies.`
    },
    {
        name: 'Vyga Dambrauskas',
        position: 'Founder & COO',
        image: vygaDambrauskas,
        description: `Vyga has worked within multiple industries from enterprise retail to the construction sector. He has had responsibility for companies with multiple millions in revenues.

He has a proven track record, extremely versatile and his ability to drive change within high-growth organisations has led to increased operational efficiencies and profitability.`
    },
    {
        name: 'Kealan Mc Cluskey',
        position: 'CTO & Global Development Director',
        image: kealanMcCluskey,
        description: `Having graduated as an architect from Trinity College Dublin in 1991, Kealan went on to build large architecture and property businesses in Ireland.

He sold the Architecture business in 2005, and started a successful property/strategy consultancy working in Ireland between 2008 and 2012. He then relocated this business to London in 2012 and built up a Land/Site acquisition/strategy/Masterplanning business.

He is widely regarded as one of the London's leading independent site-sourcing consultants currently based in London.`
    },
    {
        name: 'Terry Hutt',
        position: 'Architectural Consultant',
        image: terryHutt,
        description: `Terry Hutt hails from Canada and holds a bachelor of environmental design studies and a master's degree in architecture. He has held several positions in the design community and practiced in Canada, the US and is currently consulting in Ireland and Europe for the last 20 years over his 37 year career. He brings an eco-friendly design ethos and has consulted on projects from hospitals to corporate headquarters to housing solutions throughout Europe and North America.`
    },
    {
        name: 'Sameer Dababneh',
        position: 'Director of Sales and Strategy',
        image: sameerDababneh,
        description: `Sameer Dababneh is a seasoned industry veteran with over 20 years of experience, during which he has held leading roles in global companies in the real estate, banking, investment and aviation sectors.

With a proven track record in successful partnerships as well as his solid analytical and operational skills, Sameer is a highly accomplished corporate professional with extensive insight into the Middle East market. His forte is the development of key partnerships with profound knowledge of growth strategies, tactics and action plans in the US, UK and Arabian Gulf as well as his extensive portfolio of UHWNI and Royals.

Sameer was born and raised in the UAE and has established his footprint in the industry throughout his travels around the world. He holds a degree in business administration and is an avid golfer.`
    },
    {
        name: 'Mandhir Sidhu',
        position: 'Sales Director',
        image: mandhirSidhu,
        description: null
    },
    {
        name: 'Andrew',
        position: 'Manager',
        image: andrew,
        description: null
    }
]

const Team = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [selectedMember, setSelectedMember] = useState<number | null>(null)

    useEffect(() => {
        const currentRef = sectionRef.current
        if (!currentRef) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            {
                threshold: 0.2,
            }
        )

        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [])

    // Calculate which row the selected member is in (4 items per row)
    const getRowIndex = useCallback((index: number) => Math.floor(index / 4), [])

    const handleMemberClick = useCallback((index: number) => {
        setSelectedMember((prev) => (prev === index ? null : index))
    }, [])

    const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleMemberClick(index)
        }
    }, [handleMemberClick])

    // Memoize selected row calculation
    const selectedRow = useMemo(() =>
        selectedMember !== null ? getRowIndex(selectedMember) : -1,
        [selectedMember, getRowIndex]
    )

    return (
        <div ref={sectionRef} className={s.team}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h2 className={`${s.title} ${isVisible ? s.titleAnimate : ''}`}>Meet Our Team</h2>
                </div>

                <div className={s.grid}>
                    {teamMembers.map((member, index) => {
                        const memberRow = getRowIndex(index)
                        const isLastInRow = (index + 1) % 4 === 0 || index === teamMembers.length - 1
                        const shouldShowDropdown = isLastInRow && selectedRow === memberRow
                        const isExpanded = selectedMember === index

                        return (
                            <Fragment key={index}>
                                <div
                                    className={`${s.memberCard} ${isExpanded ? s.active : ''} ${isVisible ? s.memberCardAnimate : ''}`}
                                    onClick={() => handleMemberClick(index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View details for ${member.name}`}
                                >
                                    <div className={s.imageContainer}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className={s.image}
                                            loading="lazy"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.style.display = 'none'
                                            }}
                                        />
                                        <div className={s.overlay}>
                                            <div className={s.overlayContent}>
                                                <h3 className={s.memberName}>{member.name}</h3>
                                                <p className={s.memberPosition}>{member.position}</p>
                                            </div>
                                        </div>
                                        {selectedMember === index && (
                                            <div className={s.selectedIndicator}>
                                                <ChevronDown size={18} />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {shouldShowDropdown && selectedMember !== null && (
                                    <div
                                        key={`dropdown-${memberRow}`}
                                        className={`${s.dropdownContainer} ${selectedMember !== null ? s.open : ''}`}
                                    >
                                        <div className={s.dropdownContent}>
                                            <button
                                                className={s.closeButton}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setSelectedMember(null)
                                                }}
                                                aria-label="Close"
                                            >
                                                <X size={24} strokeWidth={2} />
                                            </button>

                                            <div className={s.detailsGrid}>
                                                <div className={s.detailsImage}>
                                                    <img
                                                        src={teamMembers[selectedMember].image}
                                                        alt={teamMembers[selectedMember].name}
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement
                                                            target.style.display = 'none'
                                                        }}
                                                    />
                                                </div>
                                                <div className={s.detailsInfo}>
                                                    <h3 className={s.detailsName}>{teamMembers[selectedMember].name}</h3>
                                                    <p className={s.detailsPosition}>{teamMembers[selectedMember].position}</p>
                                                    {teamMembers[selectedMember].description ? (
                                                        <div className={s.detailsDescription}>
                                                            {teamMembers[selectedMember].description.split('\n\n').map((paragraph, idx) => (
                                                                <p key={idx}>{paragraph}</p>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <p className={s.noDescription}>
                                                            Bio coming soon.
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team
