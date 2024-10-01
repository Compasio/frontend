import './Projects.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Projects = ({ ongId }) => {
    const [page, setPage] = useState(1)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                if (ongId) { 
                    const response = await axios.get(`https://backend-production-ff4c.up.railway.app/projects/getAllProjectsByOng/${ongId}/${page}`);
                    
                    if (response.data && response.data.response) {
                        setProjects(response.data.response);
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar projetos: ", error);
            }
        };

        fetchProjects();
    }, [ongId, page]); 

    return (
        <div className='Projects'>
            {projects.length > 0 ? (
                projects.map(project => (
                    <div key={project.id_project} className="Row">
                        {project.ImageResource.length > 0 && (
                            <img
                                src={project.ImageResource[0].url}
                                alt={project.project_name}
                            />
                        )}
                        <div className='Info'>
                            <h2>{project.project_name}</h2>
                            <p>{project.description}</p>
                            {project.theme.map((theme, index) => (
                                <span key={index}>
                                    {theme.replace('_', ' ')}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhum projeto encontrado.</p>
            )}
        </div>
    )
}

export default Projects;
