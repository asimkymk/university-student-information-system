import styles from "../../styles/Layout.module.css";
import $ from "jquery";
import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
        if ($(document).scrollTop() > 25) {
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
    const homeElement = <FontAwesomeIcon icon={faHome} />;
    return (
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <h1>Sol Menü</h1>
        </div>

        <div className={styles.rightPanel}>
          <div className={`scrollCheck ${styles.topPanel}`}>
            <div className={styles.topPanelRoot}>
              <div className={styles.topPanelItem}>
                <nav className={styles.topPanelNav}>
                  <ol className={styles.topPanelList}>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span
                          className={styles.topPanelLink}
                          style={{ marginRight: "7px" }}
                        >
                          {homeElement}
                        </span>
                      </a>
                    </li>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span className={styles.topPanelLink}>Ana Sayfa</span>
                      </a>
                    </li>
                    <li className={styles.topPanelListSeperator}>/</li>
                    <li className={styles.topPanelLi}>
                      <a href="#">
                        <span className={styles.topPanelLink}>Notlar</span>
                      </a>
                    </li>
                  </ol>
                </nav>
                <h6 className={styles.topPanelPageText}>Notlar</h6>
              </div>
              <div className={styles.topPanelItem}>
                Profil Resmi Ayarlar vs.
              </div>
            </div>
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
          reprehenderit alias doloremque, recusandae, odit nostrum sit.
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            saepe a, sit expedita aspernatur atque sapiente quidem labore
            similique itaque suscipit illo harum quisquam dolorum, reprehenderit
            impedit tenetur sed at. Rerum quod repellendus nobis facilis cum,
            minima iste tenetur sit, dicta labore eaque molestias in atque sunt
            commodi reiciendis magni praesentium asperiores a. Cum placeat rerum
            natus numquam quaerat veniam dolorem distinctio aut dicta aliquam
            neque magnam, deleniti earum molestiae voluptatibus hic iusto ipsam
            temporibus consectetur debitis nobis! Aliquid sequi sapiente dolore
            fugit, officia voluptate. Nesciunt quaerat labore explicabo beatae,
            porro eligendi quas qui accusantium quod saepe similique nihil
            dignissimos odit id, sequi eos mollitia minima dicta. Fuga eveniet
            ipsum vitae, architecto nostrum eaque debitis beatae excepturi.
            Nobis voluptatibus itaque velit nesciunt explicabo nam repellat,
            eaque molestias illo minima? Soluta laudantium totam quidem delectus
            dolore minus unde odit ex mollitia suscipit molestias nobis non
            ratione porro facilis nostrum eveniet, deleniti qui dolor quam ut
            dignissimos ipsam expedita. Eligendi voluptatem earum reiciendis
            sint voluptas sed consectetur aliquam velit eveniet libero.
            Molestiae eligendi doloremque magnam, explicabo ad corporis fugiat
            repellat nisi quasi error facere, possimus sit dignissimos
            laboriosam? Odio, quod tempore nesciunt, mollitia vel cum ea iure,
            laboriosam aspernatur magnam molestiae quisquam corrupti praesentium
            quidem aliquid laudantium eius? Voluptatibus soluta perferendis ea
            aliquid eaque iusto aspernatur fugit. Dolorum, itaque harum optio
            quod atque dolorem. Tenetur vitae ab corporis sit, distinctio
            facilis aperiam ducimus hic exercitationem odio, itaque similique
            facere numquam? Quidem doloribus officia perferendis voluptate!
            Magnam reiciendis officia natus doloribus expedita sequi temporibus
            quas sit voluptas deleniti harum inventore nobis laborum,
            accusantium eligendi recusandae nihil pariatur ipsam unde voluptate.
            Enim, totam aspernatur mollitia eos blanditiis incidunt, aliquam
            asperiores error dignissimos cumque suscipit voluptatibus ea eveniet
            corrupti placeat facere ratione non maxime consequuntur? Natus amet
            magni cumque in saepe unde dignissimos suscipit corrupti illo.
            Blanditiis, corporis. Fugiat earum, cum blanditiis, dicta sequi
            autem hic nemo ab, harum reprehenderit obcaecati quo exercitationem
            recusandae. Cumque rem, itaque possimus natus assumenda temporibus,
            nesciunt accusamus blanditiis, quam praesentium in illum veniam
            molestiae quibusdam. Quas amet voluptatum quasi quidem voluptatibus
            obcaecati autem eaque repellendus nobis saepe excepturi similique
            nemo dolore veritatis quis dolorem facere error, nam maxime quod
            ipsum blanditiis nisi. Dignissimos debitis autem recusandae
            accusamus nostrum expedita, ipsam est velit perspiciatis excepturi
            consequatur cumque quasi. Eveniet, sunt earum. Quasi minus labore
            officiis. Omnis, cum! Repellat quos porro excepturi soluta error
            asperiores. Eaque quaerat qui inventore dolor neque.
          </p>
          Nostrum inventore voluptate omnis nesciunt repellendus minus aperiam.
          Qui, adipisci. Ipsa, eum ipsum. Consequuntur aliquid ea maxime, aut
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
          eum incidunt!
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
            rerum, quis perspiciatis ea maiores, tempore, similique atque
            deserunt recusandae harum saepe doloribus porro facilis
            reprehenderit. Neque cum quidem fugiat dolore in voluptatibus omnis
            nisi temporibus quasi quaerat, ipsum atque laudantium ab porro,
            nesciunt quod. A, tempore accusamus dolore nemo sint optio neque
            assumenda similique saepe temporibus, voluptatem itaque laborum
            omnis, voluptates minima eos pariatur voluptate alias nihil delectus
            corporis. Vero porro odit fugit doloremque molestiae repudiandae
            tenetur ut quam. Expedita, suscipit consectetur! Dolores saepe,
            dolore nesciunt accusantium, corrupti consequuntur quisquam quo,
            distinctio delectus animi officia veritatis non deleniti. Saepe sunt
            sint impedit odio, dolore officia, officiis magnam nisi tenetur
            libero quo delectus ipsum ex distinctio repellendus omnis adipisci
            enim, porro natus. Blanditiis delectus ab provident molestiae,
            aspernatur nisi. Autem facere maiores repellat dicta veritatis animi
            unde, expedita ipsam ipsum, exercitationem mollitia illo, aperiam
            aliquam libero aspernatur nostrum placeat ad voluptate hic a itaque
            odit inventore? Tempora molestias hic repudiandae voluptates
            officiis dolorem numquam aliquid architecto, libero non, quam quod
            error. Neque veniam doloribus cupiditate, quas aut blanditiis
            maxime, animi autem officiis adipisci, quidem similique dicta!
            Possimus aperiam eius temporibus quidem dignissimos, distinctio
            accusantium sit consequatur esse ad voluptatibus? Deserunt ullam
            odio officiis velit cumque veniam enim est animi, maiores
            voluptatibus veritatis ex excepturi ab aspernatur, corporis iste
            pariatur ipsum. Nemo corporis praesentium harum expedita, aspernatur
            vel delectus facilis quasi debitis animi eveniet nostrum molestias
            corrupti! Dignissimos vero esse magnam nisi quisquam molestias
            deserunt repudiandae, odio animi quas corrupti ipsam illo iusto
            ipsum amet architecto omnis earum non, provident doloremque
            assumenda! Quaerat quam excepturi mollitia et accusamus veniam.
            Aliquid eius inventore amet officia consequatur a ipsum tempora
            dignissimos nulla laborum delectus, magni non quo veritatis odio at
            tenetur perferendis ad nobis nam. Recusandae iste consequuntur
            laudantium quia hic iure sit quos quidem eum ipsam? Quae dolores
            distinctio neque error voluptatum accusantium ratione explicabo
            atque non a dolor ipsum labore cum ducimus eaque aut blanditiis,
            corrupti alias assumenda itaque amet. Cumque consequuntur expedita
            labore cupiditate cum quas aliquid quis nam nulla rem incidunt
            voluptatem voluptates, iure pariatur corporis atque. Ullam vel eaque
            officia, mollitia, autem sed dolor numquam accusantium doloremque
            consequatur aliquid quas odit tempore. Dicta non iure ipsum aperiam
            autem vero, error quod asperiores facere, magnam officia est quia
            reprehenderit, cumque placeat temporibus nisi! Modi, mollitia?
            Molestias in voluptas ut delectus! Maiores, consequatur! Ea culpa
            nesciunt sapiente aliquam ullam ab voluptatem veritatis esse, iusto
            optio iste sit dicta a. Quidem reiciendis impedit possimus harum
            totam, quo aliquid eveniet. Illo necessitatibus nobis deleniti? Eius
            facere veniam cupiditate unde vero ut est omnis! Hic iste tempore
            harum, expedita vel, ratione iure eligendi ipsum inventore
            architecto deleniti labore aliquid asperiores quis temporibus
            consequuntur accusamus ad, officiis id numquam. Animi numquam ea
            culpa adipisci ex pariatur laboriosam, earum ipsam accusantium nihil
            eaque deleniti dolores voluptatum, assumenda asperiores, praesentium
            corporis ullam eum officiis? Non ut distinctio, unde odio dolore
            impedit officiis, voluptatum, doloremque voluptas reprehenderit
            ullam totam assumenda nesciunt rerum. Amet cupiditate iure nihil
            ratione.
          </p>
          {this.children}
        </div>

        <script>{this._handleScroll}</script>
      </div>
    );
  }
}

export default Layout;
