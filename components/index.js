function Card({
    title,
    description,
    date,
    username,
    id
}) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = id
    card.setAttribute('draggable', true)

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const cardTitle = document.createElement('span');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    cardHeader.appendChild(cardTitle);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description

    cardContent.appendChild(cardDescription);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const dueDate = document.createElement('span');
    dueDate.className = 'due-date';
    dueDate.textContent = `Due: ${date}`;

    const assignee = document.createElement('span');
    assignee.className = 'assignee';
    assignee.textContent = `Assigned to: ${username}`;

    cardFooter.appendChild(dueDate);
    cardFooter.appendChild(assignee);

    card.appendChild(cardHeader);
    card.appendChild(cardContent);
    card.appendChild(cardFooter);
    
    card.ondragstart = () => {
        setTimeout(() => card.classList.add('hidden'), 5)
    }
    card.ondragend = () => {
        card.classList.remove('hidden')
    }


    return card
}


export default Card