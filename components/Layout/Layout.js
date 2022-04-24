import styles from "../../styles/Layout.module.css";
import $ from "jquery";
import React, { useState, Component } from "react";

class Layout extends Component {
  constructor({ children }) {
    super();
    this.children = children;
  }
  componentDidMount() {
    this._handleScroll();
  }
  _handleScroll() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $(".scrollCheck").removeClass(styles.topPanel);
          $(".scrollCheck").addClass(styles.topPanelScroll);
        } else {
          $(".scrollCheck").removeClass(styles.topPanelScroll);
          $(".scrollCheck").addClass(styles.topPanel);
        }
      });
    });
  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <h1>Sol Menü</h1>
        </div>

        <div className={styles.rightPanel}>
          <div className={`scrollCheck ${styles.topPanel}`}>
            Ana Sayfa / Notlar
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt
          quasi atque quam quidem architecto nobis sint perspiciatis fuga ut
          accusamus aliquid, corporis quibusdam. Placeat quisquam nihil vitae
          corrupti, quidem esse iure temporibus ab autem veniam aliquam quasi?
          Amet esse similique repudiandae nisi dolorem architecto et eum
          doloribus quis ullam, debitis aspernatur consectetur officiis quasi.
          Pariatur quam totam excepturi fugiat in, itaque beatae eligendi hic
          maxime perferendis temporibus libero quaerat ex porro, ipsa, vitae
          officiis mollitia. Eaque magni in distinctio quas doloribus, eveniet
          cum maiores sequi repellat ab fuga minima soluta harum odio explicabo
          accusamus debitis quibusdam laborum, nam, exercitationem deleniti
          dignissimos iusto architecto veritatis. Dolor fugit iste debitis
          dicta, facere asperiores ipsa doloremque doloribus rem ab error, sunt
          expedita recusandae illo, quia nam aspernatur animi! Non sapiente in
          consequatur facere sint corporis libero voluptate at, possimus nisi
          nihil distinctio temporibus amet sunt vero ratione unde. Doloremque,
          asperiores. Sunt fuga omnis corrupti eaque quisquam molestiae vero,
          quidem earum voluptatibus rem, laudantium veritatis id ratione
          recusandae dolores fugit dolorem nobis, ducimus iure deserunt amet!
          Fugit quos hic adipisci ut. Vero sunt commodi accusamus, et asperiores
          minima cupiditate corporis odit libero labore dolor quidem ratione
          quas architecto adipisci perspiciatis, incidunt, rerum iusto ad
          quibusdam consequuntur in! Quas provident optio ea autem cumque esse
          magni eveniet, a incidunt! Quia nihil iure ipsum assumenda. Explicabo
          repellat ullam, quo delectus aut iure repellendus consectetur! Iure
          laboriosam delectus est culpa cupiditate aliquam nihil suscipit atque
          fugiat dolorum consectetur doloremque rerum cum architecto quibusdam
          fugit ab, expedita ipsum ex deleniti minus animi accusamus optio
          saepe. Architecto autem, impedit nesciunt obcaecati perspiciatis
          voluptatibus labore vitae eaque quisquam dolores eligendi amet
          doloremque officia exercitationem, quo facere quia sint ullam
          repellendus cumque. Ad, officia quidem neque ipsum fugiat impedit
          harum minus quas asperiores architecto eum ut fuga officiis quod
          repellendus ratione tempora numquam rerum tempore quae molestias
          maxime magni nihil! Dolore nisi fugiat, aut commodi fugit delectus
          beatae! Facilis ipsa ex consequuntur amet repudiandae ratione possimus
          eius, unde aspernatur assumenda! At aperiam beatae adipisci expedita
          veniam quidem, iure quam exercitationem quis saepe sequi eveniet
          maxime! Ut ducimus, voluptas, laboriosam doloribus animi dolore
          quisquam delectus, aut iste atque aliquam fugiat mollitia libero amet
          cupiditate. Similique incidunt quas aperiam facere cupiditate animi
          aliquam, minima eveniet nisi molestias quo at expedita quaerat ipsam
          doloribus vero eius natus deserunt earum officia voluptates culpa
          maxime! Consectetur sequi explicabo iure dicta tenetur magnam eaque
          ipsa est! Expedita architecto quae voluptate laudantium ab numquam
          iste repudiandae quis distinctio tempora, quidem deleniti debitis
          dolore voluptas rerum minima corrupti praesentium animi molestiae
          dolorem enim. Dicta, fugiat, earum, facilis minima accusantium amet
          commodi hic tempore delectus corporis cumque! Inventore illo minima
          iste aspernatur alias aperiam harum eius animi quisquam totam libero,
          excepturi, omnis esse sint eligendi reprehenderit qui, nemo fuga
          possimus repudiandae enim. Odit reprehenderit exercitationem, aliquid
          praesentium reiciendis corrupti aut doloribus, provident eius, ipsa
          hic cumque suscipit sapiente harum molestiae eveniet excepturi?
          Voluptatibus ab odit, harum error ipsam odio asperiores officia vero?
          Beatae iste esse placeat, inventore molestiae illo nobis sint soluta
          id facere ipsam ipsa vel modi eum debitis consequuntur ut, cumque in.
          Obcaecati facere perspiciatis consequatur quae consequuntur
          reprehenderit alias doloremque, recusandae, odit nostrum sit. Nostrum
          inventore voluptate omnis nesciunt repellendus minus aperiam. Qui,
          adipisci. Ipsa, eum ipsum. Consequuntur aliquid ea maxime, aut
          voluptatibus excepturi optio! Culpa, doloribus corporis qui expedita,
          alias illo aliquam sed beatae doloremque magnam cumque earum nam
          repellendus ipsum blanditiis commodi dicta soluta hic exercitationem
          tenetur? Odit ad veritatis facilis, a fugit eligendi consequatur
          voluptate enim iusto eos deserunt velit. Eius facere, ex aliquid, ea
          laboriosam quos iure laudantium quae iste exercitationem consequatur
          voluptatem amet facilis neque distinctio? Quis officiis excepturi odit
          iure, itaque reiciendis doloremque error laboriosam. Aut, voluptatum.
          Eaque, aperiam sunt? Ipsa ad vitae quasi temporibus dolorum
          repudiandae non eveniet exercitationem, quibusdam corporis minima
          architecto laborum neque molestiae tenetur. Unde, dolore debitis ea
          sapiente ratione sunt amet eum voluptatibus illum nostrum hic dicta
          laudantium totam consequuntur libero ullam facere consequatur, nam
          similique quae! Ipsum dicta architecto quos! Fugit nostrum ipsa
          aliquid illum nulla consequatur laboriosam ab vero quia odio numquam,
          at dolorem, inventore dolores officia sequi quibusdam consectetur, non
          eum incidunt! Ducimus consequuntur asperiores unde atque deserunt.
          Perferendis consequuntur distinctio laborum omnis tempora aut minima
          soluta saepe, cumque at ipsa error rem quidem animi unde earum non
          explicabo optio a? Quibusdam quasi ex voluptatum beatae asperiores!
          Nostrum placeat distinctio mollitia ullam recusandae voluptas nemo
          explicabo voluptatum nulla nihil numquam, itaque minus delectus
          aliquid doloribus, culpa eius ex, reprehenderit earum autem
          consequatur rem! Magnam, ipsa. Accusantium quisquam pariatur ea natus
          quis nam officia! Nobis corrupti dolorum suscipit debitis quidem
          voluptas quia beatae praesentium nisi corporis omnis sit similique quo
          perferendis, tempore vitae natus neque? Alias provident sed soluta nam
          eveniet quis adipisci illum! Animi odit, quam mollitia magni libero
          quibusdam commodi, accusantium minima aut ipsam nihil laudantium dolor
          dicta recusandae optio, eaque similique excepturi! Dolor quos
          praesentium saepe veniam voluptatibus rem soluta amet doloribus.
          Tempora ad fuga ea, quas ab, nihil nisi eligendi, vel quia hic sed?
          Harum perferendis tempora dolores. Ipsa esse distinctio inventore nemo
          sapiente non eveniet, quibusdam, dolorum fugit commodi fuga tempore
          eos rem et soluta incidunt odit! Totam iure nemo facilis similique
          quod a aliquam beatae, ut quia aperiam impedit dignissimos sit rem
          consequuntur unde iste eius ex tempora distinctio odio voluptas!
          Repellat tenetur, fuga soluta a vitae veniam ducimus reiciendis sed?
          Quisquam, laudantium debitis amet minima ullam error, quod dolores a
          soluta perferendis doloremque eligendi exercitationem perspiciatis
          tempora vitae! Cupiditate hic iusto fuga ex cumque esse rem nobis
          delectus repellat totam cum maxime quae, asperiores voluptate placeat
          beatae libero veniam dignissimos tempore laborum? Est ab distinctio
          animi officiis nisi obcaecati quis neque, molestias quam iure nulla
          praesentium facilis numquam quidem repellendus fuga officia nostrum
          eveniet nemo itaque dolor vero doloribus. Ipsam cupiditate ipsa sint?
          Reiciendis facilis dolore accusamus molestiae ipsam beatae commodi
          voluptatem deleniti quos quaerat alias ad perferendis cum eius fugit
          mollitia doloremque voluptatum, officiis facere laudantium numquam.
          Consectetur deleniti ipsum ipsam, totam debitis quo tempore.
          {this.children}
        </div>
        <script>{this._handleScroll}</script>
      </div>
    );
  }
}

export default Layout;
