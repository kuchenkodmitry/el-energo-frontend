import React, { useState, useEffect } from 'react';

function Admin() {
  const [service, setService] = useState({ title: '', description: '', image: '', url: '' });
  const [project, setProject] = useState({ title: '', description: '', image: '', url: '' });
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/postsdb/service').then(r => r.json()).then(setServices);
    fetch('/api/postsdb/project').then(r => r.json()).then(setProjects);
  }, []);

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/postsdb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...service, category: 'service' })
    });
    const data = await fetch('/api/postsdb/service').then(r => r.json());
    setServices(data);
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/postsdb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...project, category: 'project' })
    });
    const data = await fetch('/api/postsdb/project').then(r => r.json());
    setProjects(data);
  };

  return (
    <div style={{padding: '20px'}}>
      <h2>Добавить услугу</h2>
      <form onSubmit={handleServiceSubmit} style={{marginBottom: '40px'}}>
        <input placeholder="Название" value={service.title} onChange={e => setService({...service, title: e.target.value})} />
        <input placeholder="Описание" value={service.description} onChange={e => setService({...service, description: e.target.value})} />
        <input placeholder="Изображение" value={service.image} onChange={e => setService({...service, image: e.target.value})} />
        <input placeholder="URL" value={service.url} onChange={e => setService({...service, url: e.target.value})} />
        <button type="submit">Сохранить</button>
      </form>

      <h2>Добавить проект</h2>
      <form onSubmit={handleProjectSubmit} style={{marginBottom: '40px'}}>
        <input placeholder="Название" value={project.title} onChange={e => setProject({...project, title: e.target.value})} />
        <input placeholder="Описание" value={project.description} onChange={e => setProject({...project, description: e.target.value})} />
        <input placeholder="Изображение" value={project.image} onChange={e => setProject({...project, image: e.target.value})} />
        <input placeholder="URL" value={project.url} onChange={e => setProject({...project, url: e.target.value})} />
        <button type="submit">Сохранить</button>
      </form>

      <h3>Существующие услуги</h3>
      <ul>
        {services.map(s => <li key={s.id}>{s.title}</li>)}
      </ul>

      <h3>Существующие проекты</h3>
      <ul>
        {projects.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
}

export default Admin;
