import banner from '../Images/banner.jpg';
import image1 from '../Images/wallpaper.jpg';

function Main() {
  return (
    <main className="main">
      <img src={banner} alt="Some lake" className="main_banner"/>
      <article className="article_container">
        <h1 className="article_header">My Header</h1>
        <p className="article_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti tempore maiores vero ut porro dolorum. Dicta, ullam? Debitis similique repudiandae repellendus facilis esse cumque voluptatem, harum facere nostrum, omnis sed nemo. Provident nobis recusandae praesentium. </p>

        <img src={image1} alt="Montanhas" className=" article_images article_imagem1"/>   

        <p className="article_text">Explicabo, ipsa modi, impedit eum natus voluptatum molestiae quos qui laborum dolores nemo numquam praesentium cum consequatur doloribus quam nesciunt assumenda corporis. Assumenda saepe quaerat ipsum nihil est voluptates explicabo rerum earum aspernatur eos dolores nesciunt voluptate veniam, vel quasi aut. Repudiandae neque temporibus pariatur cumque impedit culpa laudantium, ea ipsam unde. Porro ipsa quidem voluptas ratione numquam eum nulla nostrum exercitationem, sit necessitatibus fuga rem, fugiat blanditiis inventore dolorem eveniet! Est ipsum repellat quisquam sint sit autem voluptatem unde, saepe rerum doloremque nobis sapiente adipisci explicabo! Dolor laborum, quidem consequuntur rerum vero ipsam necessitatibus deleniti distinctio laboriosam et natus sapiente voluptate eos, neque in cumque quae sint velit repudiandae culpa, omnis deserunt obcaecati at? Cupiditate rerum alias optio, culpa accusamus nisi? Commodi molestias facere consequuntur ipsa natus ducimus eaque facilis eius repellendus sit enim dicta recusandae ratione sequi, tempora, labore ut vitae nam voluptas dolore mollitia? Quibusdam debitis minus officia quas voluptatibus voluptates velit voluptate tempore harum molestiae quia autem accusantium deleniti sequi, fugiat veritatis ab suscipit cupiditate aliquam officiis explicabo, molestias magni doloremque. Vel explicabo aliquam assumenda pariatur voluptatibus est quis dolorem similique magni reiciendis ipsa nemo, amet sit accusamus tenetur maxime repudiandae porro consequatur eos aut modi, doloremque corporis minima praesentium. Neque unde quia maiores quae eos itaque quisquam mollitia vitae aperiam vel! Ad laboriosam non aperiam? Vel dolorum repellat accusamus, explicabo nemo illo delectus odit incidunt optio, earum fuga autem voluptatibus beatae ad reiciendis harum veniam quas facere saepe doloremque porro minima adipisci laudantium enim. Vero, possimus pariatur? Reprehenderit quasi architecto, voluptatem incidunt libero a atque velit minima ullam nesciunt!</p>
        <p className="article_date">28/02/2021 17:52</p>
      </article>
    </main>
  )
}

export default Main;