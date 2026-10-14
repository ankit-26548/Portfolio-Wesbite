import { useEffect, useRef, useState } from 'react'
import { BriefcaseBusiness, ChevronDown, Gem } from 'lucide-react'
import { experiences } from '../data/experiences'

function ExperienceSection() {
    const listRef = useRef(null)
    const [hoveredExperience, setHoveredExperience] = useState(null)
    const [expandedExperience, setExpandedExperience] = useState(null)

    useEffect(() => {
        const rows = listRef.current?.querySelectorAll('[data-reveal]')
        if (!rows?.length) return undefined

        if (!('IntersectionObserver' in window)) {
            rows.forEach((row) => row.classList.add('is-visible'))
            return undefined
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            })
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 })

        rows.forEach((row) => observer.observe(row))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="experience-section" aria-labelledby="experience-title">
            <div className="experience-heading">
                <div>
                    <p className="eyebrow">The path so far</p>
                    <h2 id="experience-title">Experience<span>.</span></h2>
                </div>
                <BriefcaseBusiness aria-hidden="true" />
            </div>

            <ol className="experience-list" ref={listRef}>
                {experiences.map((experience, index) => (
                    <li
                        className="experience-company-item"
                        data-reveal
                        key={experience.id}
                        style={{ '--entry-index': index }}
                        onMouseEnter={() => setHoveredExperience(experience.id)}
                        onMouseLeave={() => setHoveredExperience(null)}
                        onFocusCapture={() => setHoveredExperience(experience.id)}
                        onBlurCapture={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget)) setHoveredExperience(null)
                        }}
                    >
                        <div className={`company-mark company-mark-${experience.id}`} aria-hidden="true">{experience.mark}</div>
                        <div className="company-content">
                            <div className="company-overview">
                                <h3>{experience.company}</h3>
                                <p>{experience.employmentType}{experience.duration ? ` · ${experience.duration}` : ''}</p>
                                {experience.location && <p className="experience-location">{experience.location}</p>}
                            </div>
                            <ol className="experience-positions">
                                {experience.positions.map((position) => (
                                    <li className="experience-position" key={`${position.role}-${position.startDate}`}>
                                        <span className="position-marker" aria-hidden="true" />
                                        <div className={`position-copy${position.description ? ' has-details' : ''}${hoveredExperience === experience.id || expandedExperience === experience.id ? ' is-expanded' : ''}`}>
                                            <div className="position-heading">
                                                <div>
                                                    <h4>{position.role}</h4>
                                                    <p className="position-period">
                                                        {position.startDate} — {position.endDate || 'Present'}
                                                        {position.workMode && ` · ${position.workMode}`}
                                                    </p>
                                                </div>
                                                {position.description && (
                                                    <button
                                                        className="position-details-toggle"
                                                        type="button"
                                                        aria-expanded={hoveredExperience === experience.id || expandedExperience === experience.id}
                                                        onClick={() => {
                                                            setHoveredExperience(null)
                                                            setExpandedExperience((current) => current === experience.id ? null : experience.id)
                                                        }}
                                                    >
                                                        <span>{hoveredExperience === experience.id || expandedExperience === experience.id ? 'Close details' : 'Role details'}</span>
                                                        <ChevronDown aria-hidden="true" />
                                                    </button>
                                                )}
                                            </div>
                                            {position.description && (
                                                <div className="position-details">
                                                    <div className="position-details-inner">
                                                        <div className="position-description">
                                                            {position.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                                        </div>
                                                        <div className="position-contributions">
                                                            <h5>Key responsibilities &amp; achievements</h5>
                                                            <ul>
                                                                {position.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                                                            </ul>
                                                        </div>
                                                        <div className="position-tech-stack">
                                                            <h5>Tech stack</h5>
                                                            <p>{position.techStack.join(' · ')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {position.skills?.length > 0 && (
                                                <ul className="position-skills" aria-label="Skills">
                                                    <li><Gem aria-hidden="true" />{position.skills.join(', ')}</li>
                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default ExperienceSection