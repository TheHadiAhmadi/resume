import minibase from "$lib/minibase"

export async function getResume(id) {
    const [
        _resumes,
        _experiences,
        _skills,
        _projects,
        _users,
        _contacts
    ] = await Promise.all([
        minibase.get('resumes'),
        minibase.get('experiences'),
        minibase.get('skills'),
        minibase.get('projects'),
        minibase.get('users'),
        minibase.get('contacts'),
    ])

    const resume = _resumes.find(res => res.id === id)

    if(!resume) return {
        data: {
            message: 'Resume not found'
        }
    }

    const user = _users.find(user => user.id === resume.user_id)

    if(!user) return {
        data: {
            message: 'User not found'
        }
    }

    const experiences = _experiences.filter(experience => experience.resume_id === id)
    const projects = _projects.filter(project => project.resume_id === id)
    const contacts = _contacts.filter(contact => contact.resume_id === id)
    const skills = _skills.filter(skill => skill.resume_id === id)

    return {
        name: user.name,
        header: resume.header,
        overview: resume.overview,
        experiences: experiences.map(experience => ({
            role: experience.role,
            isRemote: experiences.isRemote,
            isFulltime: experience.isFulltime,
            description: experience.description,
            company: {
                name: experience.company_name,
                logo: experience.company_logo,
                location: {
                    country: experience.company_location_country,
                    city: experience.company_location_city,
                }
            },
            date: {
                start: experience.start_date,
                end: experience.end_date
            }
        })),
        skills: skills.map(skill => skill.name),
        contacts: contacts.map(contact => ({icon: contact.icon, value: contact.value})),
        projects
    }
}

