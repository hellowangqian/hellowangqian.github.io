const publicationsList = document.getElementById('publications-list');
const sortSelect = document.getElementById('sort');
const keywordInput = document.getElementById('keyword');

// 示例数据，实际应用中应从文件中读取
const publications = [
    { title: '论文1', time: '2020', topic: '计算机科学' },
    { title: '论文2', time: '2019', topic: '人工智能' },
    { title: '论文3', time: '2018', topic: '机器学习' },
];

function updateList() {
    let filteredPublications = publications;
    const keyword = keywordInput.value.trim();

    if (keyword) {
        filteredPublications = filteredPublications.filter(pub => pub.time.includes(keyword) || pub.topic.includes(keyword));
    }

    const sortBy = sortSelect.value;
    if (sortBy === 'time') {
        filteredPublications.sort((a, b) => new Date(b.time) - new Date(a.time));
    } else if (sortBy === 'topic') {
        filteredPublications.sort((a, b) => a.topic.localeCompare(b.topic));
    }

    publicationsList.innerHTML = '';
    filteredPublications.forEach(pub => {
        const li = document.createElement('li');
        li.textContent = `${pub.title} (${pub.time}) - ${pub.topic}`;
        publicationsList.appendChild(li);
    });
}

sortSelect.addEventListener('change', updateList);
keywordInput.addEventListener('input', updateList);

updateList();
