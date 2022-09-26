function HomePage() {
    return (
        <div style={{margin: '30px'}}>
            <h1>реалізувати 3 маршрути</h1>
            <ul>
                <li>todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos</li>
                <li>albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
                </li>
                <li>comments - при переході на який тягнуться всі комментарі
                    https://jsonplaceholder.typicode.com/comments
                </li>
            </ul>

            при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости.

            приклад запиту https://jsonplaceholder.typicode.com/posts/ID

            id поста взяти з коментаря (postId)

            відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.


        </div>
    );
}

export {HomePage}