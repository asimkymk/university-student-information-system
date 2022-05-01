import styles from "../../styles/Layout.module.css";

import React, { useState, Component } from "react";

import AppBar from "../AppBar/AppBar";
import SideBar from "../SideBar/SideBar";
class Layout extends Component {
  constructor({ children }) {
    super();
    this.children = children;
  }
  render() {
    return (
      <div className={styles.main}>
        <SideBar></SideBar>

        <div className={styles.rightPanel}>
          <AppBar
            links={{ "Ana Sayfa": "#", "Notlar": "#" }}
            title="Notlar"
          ></AppBar>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            consequatur et maxime, fugit tempore perspiciatis tempora assumenda
            quis fuga rerum cupiditate nemo veritatis, quidem aperiam saepe
            quaerat illum! Ab corrupti voluptatibus beatae pariatur aliquam
            ipsum doloremque. Omnis molestiae ab qui veniam, aut quas quos a
            eos, adipisci ut, pariatur dicta tempora unde nostrum quasi
            explicabo. Quod nemo tenetur consectetur dolorem qui, tempore
            provident fugit veniam omnis id at debitis similique. Odio
            consequuntur reprehenderit sint quas, non veniam rem quod provident
            neque nulla officiis tempore pariatur quibusdam iste officia maiores
            labore eveniet et fuga animi sapiente odit! Sint obcaecati deleniti
            sit eligendi cumque doloremque quam pariatur blanditiis,
            exercitationem, tempore molestiae aut? Nam, dicta et! Quod velit
            illo facilis aliquam expedita quaerat labore excepturi, provident
            aspernatur officia dicta inventore! Aliquid numquam nulla asperiores
            ut voluptatem fugiat harum voluptatum iure sapiente nisi error,
            eligendi fuga quasi libero doloribus soluta. Reprehenderit nostrum
            commodi praesentium molestiae eaque dolore, ea soluta velit ratione
            maxime iure! Officia dignissimos fugiat quidem. Sit iste vel
            perspiciatis officiis? Neque, consectetur. Optio nulla molestias, a
            blanditiis libero dolore deserunt dolores voluptatem veniam odit
            eius, tempore ad aperiam qui quas odio enim ratione aliquam nihil,
            vel molestiae aliquid! Impedit at, error perferendis fugit voluptate
            pariatur quisquam sint provident vitae odit cum autem suscipit hic
            ipsam temporibus tempore deserunt, voluptatibus dolorum, itaque
            porro magni. Nisi recusandae error nostrum cum ipsa numquam,
            voluptate temporibus explicabo odit. Quo, neque? Accusamus inventore
            eos voluptas asperiores officiis ullam iure laboriosam voluptatibus
            doloremque eius quam sint quos in fugiat a, amet atque voluptate
            aperiam. Facilis nisi esse non, aperiam molestias voluptate, laborum
            architecto facere, inventore deserunt saepe ducimus ad. Eveniet
            harum odio laudantium corporis molestias quod ad repudiandae error
            excepturi voluptas fuga dolorem, saepe totam! Expedita id non
            pariatur labore necessitatibus tempora quam? Sequi cupiditate ipsam
            maxime quibusdam nihil, vitae libero dolorem porro soluta,
            doloremque quas nesciunt modi ullam molestiae fugiat nam. Sunt hic
            numquam voluptates corporis, aliquid iste consequatur quos labore
            itaque nulla unde sed magni ullam at cupiditate amet, fuga provident
            eaque qui fugit ex rerum. Tenetur, explicabo debitis. Molestias
            dolor aliquam est quaerat tempora voluptates exercitationem
            blanditiis, ipsam numquam similique. Quisquam modi architecto ad
            nam! Deleniti odit repellendus voluptas obcaecati dicta nesciunt
            fugiat adipisci unde itaque minus, quam quae beatae ipsam! Quaerat
            error ducimus odit veritatis laborum explicabo natus iusto placeat,
            ipsam eius quos deserunt ad nihil cumque? Placeat beatae corporis
            voluptatem sint. Laudantium vero corrupti neque distinctio veritatis
            inventore provident consequatur, illo quasi voluptatum impedit
            voluptatibus dolorum fuga magni labore nisi. Rem error nostrum
            exercitationem, illum corporis sunt fugit quasi laudantium deserunt
            magnam, dolor aut dolores. Officia, ab! Molestias fugit unde
            accusamus repellendus porro alias perferendis ipsa omnis sapiente,
            saepe maxime id beatae aperiam explicabo enim veritatis facilis
            illum optio fuga nesciunt odio. Tempore veritatis incidunt animi
            odit ullam eligendi alias, delectus, libero laudantium iure illum
            culpa ipsam, voluptatibus optio omnis? Numquam possimus architecto
            maxime ad perferendis obcaecati ab aliquam, tenetur deserunt eius.
            Veritatis corporis ut distinctio adipisci maxime optio, impedit iste
            ipsum quaerat animi temporibus et magnam expedita. Pariatur
            voluptates eos cumque. Recusandae natus alias culpa quod
            exercitationem eum nam voluptatem, quae accusamus quibusdam modi
            eaque, perferendis est doloribus iusto molestias reprehenderit?
            Blanditiis repellendus temporibus hic dolor voluptatibus laborum.
            Libero facilis delectus quam consequuntur magni sint perferendis eos
            architecto asperiores, tenetur nobis, maxime quod provident dolorem
            doloremque saepe nulla at dicta eius voluptates. Laboriosam, in
            suscipit, eos aut error repellendus veritatis esse unde, minus
            exercitationem aspernatur atque voluptates sunt voluptatibus harum
            alias quas tenetur! Inventore quae, tempore a consequatur assumenda
            vero eum mollitia odit alias sit provident dolore soluta officiis in
            similique magnam quo, obcaecati amet quibusdam? Eveniet cum, enim
            illum animi accusamus beatae nam autem modi voluptas. Quo eaque eum,
            cupiditate quasi voluptatum beatae ut culpa incidunt. Laboriosam
            mollitia officiis molestias et ipsum vitae odio iste, delectus
            deserunt vel praesentium dignissimos modi maiores alias quas
            asperiores omnis, quibusdam laborum neque repellendus similique. Ut,
            corrupti! Nulla debitis doloribus ea quidem! Esse vitae hic eaque
            delectus deserunt officia quis ipsum similique, eos voluptatum ullam
            rem architecto quaerat animi, reiciendis et ipsa. Reprehenderit,
            atque. Recusandae perspiciatis illo aspernatur beatae deleniti, ea
            libero blanditiis suscipit? Assumenda minima aperiam officiis, nobis
            doloribus repudiandae consectetur quis dolorem voluptatem. Corrupti
            libero porro placeat suscipit eaque reiciendis pariatur vero nulla
            mollitia animi quaerat facere repellendus, fuga tempora tenetur, ut
            minus quas magnam exercitationem officiis. Consequatur culpa
            voluptatibus est repudiandae illo? Consequatur porro voluptatibus
            soluta corporis voluptas quos sint aliquam esse ducimus debitis,
            natus distinctio nisi accusantium optio, quisquam repellendus fuga
            enim quam cumque incidunt illum tenetur? Repudiandae reprehenderit
            hic deleniti voluptatibus, ea vitae, voluptas dignissimos quis
            minima excepturi, ipsam accusantium aspernatur. Et blanditiis
            mollitia, esse voluptates qui vitae nihil sit nostrum id autem
            quisquam nisi aspernatur, dignissimos aut enim libero expedita?
            Molestias perspiciatis commodi deserunt velit eligendi dolor fugit
            pariatur beatae fuga consectetur, consequuntur quisquam! Magni
            eligendi vitae dolorem. Eaque, totam iure. Eos ullam corporis
            debitis? Molestias maxime ad asperiores eaque dolore, temporibus
            rerum eligendi fuga ea enim voluptatibus laboriosam atque. Similique
            voluptatum a optio aliquam cupiditate, natus numquam voluptas quae
            mollitia vel magnam voluptate nihil iusto ex animi corrupti quidem
            dolore reprehenderit porro quis recusandae unde itaque molestiae
            nemo. Error adipisci, unde commodi quam odio fuga quisquam fugiat,
            molestiae numquam illo quas maxime? Nobis, architecto. Dolore id
            quibusdam maiores aliquid, voluptatum perspiciatis blanditiis
            dolorem dolor debitis in reprehenderit ab a hic nobis ut similique
            ad sit sint officia reiciendis quidem laboriosam, alias molestias.
            Eligendi, rem commodi aperiam, velit ullam nam odio fugiat, aut
            porro sequi pariatur enim officia illum quod asperiores non minus
            nobis. Quibusdam odio reiciendis laboriosam vel corporis cumque ex
            maiores voluptatibus unde quis ipsa, harum, libero aperiam labore
            quam ullam blanditiis! Quisquam cum delectus porro provident
            assumenda, similique ut, animi, iste soluta fugiat totam? Sit
            temporibus nesciunt iure aperiam voluptates? Eaque natus quibusdam
            similique vero iste culpa ipsam pariatur vitae aperiam impedit
            dolorem quod, tenetur dolore laborum veniam sit nobis tempora
            doloribus excepturi voluptatum veritatis voluptatibus placeat ex
            aspernatur. Tempora commodi quo voluptatibus animi esse molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            consequatur et maxime, fugit tempore perspiciatis tempora assumenda
            quis fuga rerum cupiditate nemo veritatis, quidem aperiam saepe
            quaerat illum! Ab corrupti voluptatibus beatae pariatur aliquam
            ipsum doloremque. Omnis molestiae ab qui veniam, aut quas quos a
            eos, adipisci ut, pariatur dicta tempora unde nostrum quasi
            explicabo. Quod nemo tenetur consectetur dolorem qui, tempore
            provident fugit veniam omnis id at debitis similique. Odio
            consequuntur reprehenderit sint quas, non veniam rem quod provident
            neque nulla officiis tempore pariatur quibusdam iste officia maiores
            labore eveniet et fuga animi sapiente odit! Sint obcaecati deleniti
            sit eligendi cumque doloremque quam pariatur blanditiis,
            exercitationem, tempore molestiae aut? Nam, dicta et! Quod velit
            illo facilis aliquam expedita quaerat labore excepturi, provident
            aspernatur officia dicta inventore! Aliquid numquam nulla asperiores
            ut voluptatem fugiat harum voluptatum iure sapiente nisi error,
            eligendi fuga quasi libero doloribus soluta. Reprehenderit nostrum
            commodi praesentium molestiae eaque dolore, ea soluta velit ratione
            maxime iure! Officia dignissimos fugiat quidem. Sit iste vel
            perspiciatis officiis? Neque, consectetur. Optio nulla molestias, a
            blanditiis libero dolore deserunt dolores voluptatem veniam odit
            eius, tempore ad aperiam qui quas odio enim ratione aliquam nihil,
            vel molestiae aliquid! Impedit at, error perferendis fugit voluptate
            pariatur quisquam sint provident vitae odit cum autem suscipit hic
            ipsam temporibus tempore deserunt, voluptatibus dolorum, itaque
            porro magni. Nisi recusandae error nostrum cum ipsa numquam,
            voluptate temporibus explicabo odit. Quo, neque? Accusamus inventore
            eos voluptas asperiores officiis ullam iure laboriosam voluptatibus
            doloremque eius quam sint quos in fugiat a, amet atque voluptate
            aperiam. Facilis nisi esse non, aperiam molestias voluptate, laborum
            architecto facere, inventore deserunt saepe ducimus ad. Eveniet
            harum odio laudantium corporis molestias quod ad repudiandae error
            excepturi voluptas fuga dolorem, saepe totam! Expedita id non
            pariatur labore necessitatibus tempora quam? Sequi cupiditate ipsam
            maxime quibusdam nihil, vitae libero dolorem porro soluta,
            doloremque quas nesciunt modi ullam molestiae fugiat nam. Sunt hic
            numquam voluptates corporis, aliquid iste consequatur quos labore
            itaque nulla unde sed magni ullam at cupiditate amet, fuga provident
            eaque qui fugit ex rerum. Tenetur, explicabo debitis. Molestias
            dolor aliquam est quaerat tempora voluptates exercitationem
            blanditiis, ipsam numquam similique. Quisquam modi architecto ad
            nam! Deleniti odit repellendus voluptas obcaecati dicta nesciunt
            fugiat adipisci unde itaque minus, quam quae beatae ipsam! Quaerat
            error ducimus odit veritatis laborum explicabo natus iusto placeat,
            ipsam eius quos deserunt ad nihil cumque? Placeat beatae corporis
            voluptatem sint. Laudantium vero corrupti neque distinctio veritatis
            inventore provident consequatur, illo quasi voluptatum impedit
            voluptatibus dolorum fuga magni labore nisi. Rem error nostrum
            exercitationem, illum corporis sunt fugit quasi laudantium deserunt
            magnam, dolor aut dolores. Officia, ab! Molestias fugit unde
            accusamus repellendus porro alias perferendis ipsa omnis sapiente,
            saepe maxime id beatae aperiam explicabo enim veritatis facilis
            illum optio fuga nesciunt odio. Tempore veritatis incidunt animi
            odit ullam eligendi alias, delectus, libero laudantium iure illum
            culpa ipsam, voluptatibus optio omnis? Numquam possimus architecto
            maxime ad perferendis obcaecati ab aliquam, tenetur deserunt eius.
            Veritatis corporis ut distinctio adipisci maxime optio, impedit iste
            ipsum quaerat animi temporibus et magnam expedita. Pariatur
            voluptates eos cumque. Recusandae natus alias culpa quod
            exercitationem eum nam voluptatem, quae accusamus quibusdam modi
            eaque, perferendis est doloribus iusto molestias reprehenderit?
            Blanditiis repellendus temporibus hic dolor voluptatibus laborum.
            Libero facilis delectus quam consequuntur magni sint perferendis eos
            architecto asperiores, tenetur nobis, maxime quod provident dolorem
            doloremque saepe nulla at dicta eius voluptates. Laboriosam, in
            suscipit, eos aut error repellendus veritatis esse unde, minus
            exercitationem aspernatur atque voluptates sunt voluptatibus harum
            alias quas tenetur! Inventore quae, tempore a consequatur assumenda
            vero eum mollitia odit alias sit provident dolore soluta officiis in
            similique magnam quo, obcaecati amet quibusdam? Eveniet cum, enim
            illum animi accusamus beatae nam autem modi voluptas. Quo eaque eum,
            cupiditate quasi voluptatum beatae ut culpa incidunt. Laboriosam
            mollitia officiis molestias et ipsum vitae odio iste, delectus
            deserunt vel praesentium dignissimos modi maiores alias quas
            asperiores omnis, quibusdam laborum neque repellendus similique. Ut,
            corrupti! Nulla debitis doloribus ea quidem! Esse vitae hic eaque
            delectus deserunt officia quis ipsum similique, eos voluptatum ullam
            rem architecto quaerat animi, reiciendis et ipsa. Reprehenderit,
            atque. Recusandae perspiciatis illo aspernatur beatae deleniti, ea
            libero blanditiis suscipit? Assumenda minima aperiam officiis, nobis
            doloribus repudiandae consectetur quis dolorem voluptatem. Corrupti
            libero porro placeat suscipit eaque reiciendis pariatur vero nulla
            mollitia animi quaerat facere repellendus, fuga tempora tenetur, ut
            minus quas magnam exercitationem officiis. Consequatur culpa
            voluptatibus est repudiandae illo? Consequatur porro voluptatibus
            soluta corporis voluptas quos sint aliquam esse ducimus debitis,
            natus distinctio nisi accusantium optio, quisquam repellendus fuga
            enim quam cumque incidunt illum tenetur? Repudiandae reprehenderit
            hic deleniti voluptatibus, ea vitae, voluptas dignissimos quis
            minima excepturi, ipsam accusantium aspernatur. Et blanditiis
            mollitia, esse voluptates qui vitae nihil sit nostrum id autem
            quisquam nisi aspernatur, dignissimos aut enim libero expedita?
            Molestias perspiciatis commodi deserunt velit eligendi dolor fugit
            pariatur beatae fuga consectetur, consequuntur quisquam! Magni
            eligendi vitae dolorem. Eaque, totam iure. Eos ullam corporis
            debitis? Molestias maxime ad asperiores eaque dolore, temporibus
            rerum eligendi fuga ea enim voluptatibus laboriosam atque. Similique
            voluptatum a optio aliquam cupiditate, natus numquam voluptas quae
            mollitia vel magnam voluptate nihil iusto ex animi corrupti quidem
            dolore reprehenderit porro quis recusandae unde itaque molestiae
            nemo. Error adipisci, unde commodi quam odio fuga quisquam fugiat,
            molestiae numquam illo quas maxime? Nobis, architecto. Dolore id
            quibusdam maiores aliquid, voluptatum perspiciatis blanditiis
            dolorem dolor debitis in reprehenderit ab a hic nobis ut similique
            ad sit sint officia reiciendis quidem laboriosam, alias molestias.
            Eligendi, rem commodi aperiam, velit ullam nam odio fugiat, aut
            porro sequi pariatur enim officia illum quod asperiores non minus
            nobis. Quibusdam odio reiciendis laboriosam vel corporis cumque ex
            maiores voluptatibus unde quis ipsa, harum, libero aperiam labore
            quam ullam blanditiis! Quisquam cum delectus porro provident
            assumenda, similique ut, animi, iste soluta fugiat totam? Sit
            temporibus nesciunt iure aperiam voluptates? Eaque natus quibusdam
            similique vero iste culpa ipsam pariatur vitae aperiam impedit
            dolorem quod, tenetur dolore laborum veniam sit nobis tempora
            doloribus excepturi voluptatum veritatis voluptatibus placeat ex
            aspernatur. Tempora commodi quo voluptatibus animi esse molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            consequatur et maxime, fugit tempore perspiciatis tempora assumenda
            quis fuga rerum cupiditate nemo veritatis, quidem aperiam saepe
            quaerat illum! Ab corrupti voluptatibus beatae pariatur aliquam
            ipsum doloremque. Omnis molestiae ab qui veniam, aut quas quos a
            eos, adipisci ut, pariatur dicta tempora unde nostrum quasi
            explicabo. Quod nemo tenetur consectetur dolorem qui, tempore
            provident fugit veniam omnis id at debitis similique. Odio
            consequuntur reprehenderit sint quas, non veniam rem quod provident
            neque nulla officiis tempore pariatur quibusdam iste officia maiores
            labore eveniet et fuga animi sapiente odit! Sint obcaecati deleniti
            sit eligendi cumque doloremque quam pariatur blanditiis,
            exercitationem, tempore molestiae aut? Nam, dicta et! Quod velit
            illo facilis aliquam expedita quaerat labore excepturi, provident
            aspernatur officia dicta inventore! Aliquid numquam nulla asperiores
            ut voluptatem fugiat harum voluptatum iure sapiente nisi error,
            eligendi fuga quasi libero doloribus soluta. Reprehenderit nostrum
            commodi praesentium molestiae eaque dolore, ea soluta velit ratione
            maxime iure! Officia dignissimos fugiat quidem. Sit iste vel
            perspiciatis officiis? Neque, consectetur. Optio nulla molestias, a
            blanditiis libero dolore deserunt dolores voluptatem veniam odit
            eius, tempore ad aperiam qui quas odio enim ratione aliquam nihil,
            vel molestiae aliquid! Impedit at, error perferendis fugit voluptate
            pariatur quisquam sint provident vitae odit cum autem suscipit hic
            ipsam temporibus tempore deserunt, voluptatibus dolorum, itaque
            porro magni. Nisi recusandae error nostrum cum ipsa numquam,
            voluptate temporibus explicabo odit. Quo, neque? Accusamus inventore
            eos voluptas asperiores officiis ullam iure laboriosam voluptatibus
            doloremque eius quam sint quos in fugiat a, amet atque voluptate
            aperiam. Facilis nisi esse non, aperiam molestias voluptate, laborum
            architecto facere, inventore deserunt saepe ducimus ad. Eveniet
            harum odio laudantium corporis molestias quod ad repudiandae error
            excepturi voluptas fuga dolorem, saepe totam! Expedita id non
            pariatur labore necessitatibus tempora quam? Sequi cupiditate ipsam
            maxime quibusdam nihil, vitae libero dolorem porro soluta,
            doloremque quas nesciunt modi ullam molestiae fugiat nam. Sunt hic
            numquam voluptates corporis, aliquid iste consequatur quos labore
            itaque nulla unde sed magni ullam at cupiditate amet, fuga provident
            eaque qui fugit ex rerum. Tenetur, explicabo debitis. Molestias
            dolor aliquam est quaerat tempora voluptates exercitationem
            blanditiis, ipsam numquam similique. Quisquam modi architecto ad
            nam! Deleniti odit repellendus voluptas obcaecati dicta nesciunt
            fugiat adipisci unde itaque minus, quam quae beatae ipsam! Quaerat
            error ducimus odit veritatis laborum explicabo natus iusto placeat,
            ipsam eius quos deserunt ad nihil cumque? Placeat beatae corporis
            voluptatem sint. Laudantium vero corrupti neque distinctio veritatis
            inventore provident consequatur, illo quasi voluptatum impedit
            voluptatibus dolorum fuga magni labore nisi. Rem error nostrum
            exercitationem, illum corporis sunt fugit quasi laudantium deserunt
            magnam, dolor aut dolores. Officia, ab! Molestias fugit unde
            accusamus repellendus porro alias perferendis ipsa omnis sapiente,
            saepe maxime id beatae aperiam explicabo enim veritatis facilis
            illum optio fuga nesciunt odio. Tempore veritatis incidunt animi
            odit ullam eligendi alias, delectus, libero laudantium iure illum
            culpa ipsam, voluptatibus optio omnis? Numquam possimus architecto
            maxime ad perferendis obcaecati ab aliquam, tenetur deserunt eius.
            Veritatis corporis ut distinctio adipisci maxime optio, impedit iste
            ipsum quaerat animi temporibus et magnam expedita. Pariatur
            voluptates eos cumque. Recusandae natus alias culpa quod
            exercitationem eum nam voluptatem, quae accusamus quibusdam modi
            eaque, perferendis est doloribus iusto molestias reprehenderit?
            Blanditiis repellendus temporibus hic dolor voluptatibus laborum.
            Libero facilis delectus quam consequuntur magni sint perferendis eos
            architecto asperiores, tenetur nobis, maxime quod provident dolorem
            doloremque saepe nulla at dicta eius voluptates. Laboriosam, in
            suscipit, eos aut error repellendus veritatis esse unde, minus
            exercitationem aspernatur atque voluptates sunt voluptatibus harum
            alias quas tenetur! Inventore quae, tempore a consequatur assumenda
            vero eum mollitia odit alias sit provident dolore soluta officiis in
            similique magnam quo, obcaecati amet quibusdam? Eveniet cum, enim
            illum animi accusamus beatae nam autem modi voluptas. Quo eaque eum,
            cupiditate quasi voluptatum beatae ut culpa incidunt. Laboriosam
            mollitia officiis molestias et ipsum vitae odio iste, delectus
            deserunt vel praesentium dignissimos modi maiores alias quas
            asperiores omnis, quibusdam laborum neque repellendus similique. Ut,
            corrupti! Nulla debitis doloribus ea quidem! Esse vitae hic eaque
            delectus deserunt officia quis ipsum similique, eos voluptatum ullam
            rem architecto quaerat animi, reiciendis et ipsa. Reprehenderit,
            atque. Recusandae perspiciatis illo aspernatur beatae deleniti, ea
            libero blanditiis suscipit? Assumenda minima aperiam officiis, nobis
            doloribus repudiandae consectetur quis dolorem voluptatem. Corrupti
            libero porro placeat suscipit eaque reiciendis pariatur vero nulla
            mollitia animi quaerat facere repellendus, fuga tempora tenetur, ut
            minus quas magnam exercitationem officiis. Consequatur culpa
            voluptatibus est repudiandae illo? Consequatur porro voluptatibus
            soluta corporis voluptas quos sint aliquam esse ducimus debitis,
            natus distinctio nisi accusantium optio, quisquam repellendus fuga
            enim quam cumque incidunt illum tenetur? Repudiandae reprehenderit
            hic deleniti voluptatibus, ea vitae, voluptas dignissimos quis
            minima excepturi, ipsam accusantium aspernatur. Et blanditiis
            mollitia, esse voluptates qui vitae nihil sit nostrum id autem
            quisquam nisi aspernatur, dignissimos aut enim libero expedita?
            Molestias perspiciatis commodi deserunt velit eligendi dolor fugit
            pariatur beatae fuga consectetur, consequuntur quisquam! Magni
            eligendi vitae dolorem. Eaque, totam iure. Eos ullam corporis
            debitis? Molestias maxime ad asperiores eaque dolore, temporibus
            rerum eligendi fuga ea enim voluptatibus laboriosam atque. Similique
            voluptatum a optio aliquam cupiditate, natus numquam voluptas quae
            mollitia vel magnam voluptate nihil iusto ex animi corrupti quidem
            dolore reprehenderit porro quis recusandae unde itaque molestiae
            nemo. Error adipisci, unde commodi quam odio fuga quisquam fugiat,
            molestiae numquam illo quas maxime? Nobis, architecto. Dolore id
            quibusdam maiores aliquid, voluptatum perspiciatis blanditiis
            dolorem dolor debitis in reprehenderit ab a hic nobis ut similique
            ad sit sint officia reiciendis quidem laboriosam, alias molestias.
            Eligendi, rem commodi aperiam, velit ullam nam odio fugiat, aut
            porro sequi pariatur enim officia illum quod asperiores non minus
            nobis. Quibusdam odio reiciendis laboriosam vel corporis cumque ex
            maiores voluptatibus unde quis ipsa, harum, libero aperiam labore
            quam ullam blanditiis! Quisquam cum delectus porro provident
            assumenda, similique ut, animi, iste soluta fugiat totam? Sit
            temporibus nesciunt iure aperiam voluptates? Eaque natus quibusdam
            similique vero iste culpa ipsam pariatur vitae aperiam impedit
            dolorem quod, tenetur dolore laborum veniam sit nobis tempora
            doloribus excepturi voluptatum veritatis voluptatibus placeat ex
            aspernatur. Tempora commodi quo voluptatibus animi esse molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            consequatur et maxime, fugit tempore perspiciatis tempora assumenda
            quis fuga rerum cupiditate nemo veritatis, quidem aperiam saepe
            quaerat illum! Ab corrupti voluptatibus beatae pariatur aliquam
            ipsum doloremque. Omnis molestiae ab qui veniam, aut quas quos a
            eos, adipisci ut, pariatur dicta tempora unde nostrum quasi
            explicabo. Quod nemo tenetur consectetur dolorem qui, tempore
            provident fugit veniam omnis id at debitis similique. Odio
            consequuntur reprehenderit sint quas, non veniam rem quod provident
            neque nulla officiis tempore pariatur quibusdam iste officia maiores
            labore eveniet et fuga animi sapiente odit! Sint obcaecati deleniti
            sit eligendi cumque doloremque quam pariatur blanditiis,
            exercitationem, tempore molestiae aut? Nam, dicta et! Quod velit
            illo facilis aliquam expedita quaerat labore excepturi, provident
            aspernatur officia dicta inventore! Aliquid numquam nulla asperiores
            ut voluptatem fugiat harum voluptatum iure sapiente nisi error,
            eligendi fuga quasi libero doloribus soluta. Reprehenderit nostrum
            commodi praesentium molestiae eaque dolore, ea soluta velit ratione
            maxime iure! Officia dignissimos fugiat quidem. Sit iste vel
            perspiciatis officiis? Neque, consectetur. Optio nulla molestias, a
            blanditiis libero dolore deserunt dolores voluptatem veniam odit
            eius, tempore ad aperiam qui quas odio enim ratione aliquam nihil,
            vel molestiae aliquid! Impedit at, error perferendis fugit voluptate
            pariatur quisquam sint provident vitae odit cum autem suscipit hic
            ipsam temporibus tempore deserunt, voluptatibus dolorum, itaque
            porro magni. Nisi recusandae error nostrum cum ipsa numquam,
            voluptate temporibus explicabo odit. Quo, neque? Accusamus inventore
            eos voluptas asperiores officiis ullam iure laboriosam voluptatibus
            doloremque eius quam sint quos in fugiat a, amet atque voluptate
            aperiam. Facilis nisi esse non, aperiam molestias voluptate, laborum
            architecto facere, inventore deserunt saepe ducimus ad. Eveniet
            harum odio laudantium corporis molestias quod ad repudiandae error
            excepturi voluptas fuga dolorem, saepe totam! Expedita id non
            pariatur labore necessitatibus tempora quam? Sequi cupiditate ipsam
            maxime quibusdam nihil, vitae libero dolorem porro soluta,
            doloremque quas nesciunt modi ullam molestiae fugiat nam. Sunt hic
            numquam voluptates corporis, aliquid iste consequatur quos labore
            itaque nulla unde sed magni ullam at cupiditate amet, fuga provident
            eaque qui fugit ex rerum. Tenetur, explicabo debitis. Molestias
            dolor aliquam est quaerat tempora voluptates exercitationem
            blanditiis, ipsam numquam similique. Quisquam modi architecto ad
            nam! Deleniti odit repellendus voluptas obcaecati dicta nesciunt
            fugiat adipisci unde itaque minus, quam quae beatae ipsam! Quaerat
            error ducimus odit veritatis laborum explicabo natus iusto placeat,
            ipsam eius quos deserunt ad nihil cumque? Placeat beatae corporis
            voluptatem sint. Laudantium vero corrupti neque distinctio veritatis
            inventore provident consequatur, illo quasi voluptatum impedit
            voluptatibus dolorum fuga magni labore nisi. Rem error nostrum
            exercitationem, illum corporis sunt fugit quasi laudantium deserunt
            magnam, dolor aut dolores. Officia, ab! Molestias fugit unde
            accusamus repellendus porro alias perferendis ipsa omnis sapiente,
            saepe maxime id beatae aperiam explicabo enim veritatis facilis
            illum optio fuga nesciunt odio. Tempore veritatis incidunt animi
            odit ullam eligendi alias, delectus, libero laudantium iure illum
            culpa ipsam, voluptatibus optio omnis? Numquam possimus architecto
            maxime ad perferendis obcaecati ab aliquam, tenetur deserunt eius.
            Veritatis corporis ut distinctio adipisci maxime optio, impedit iste
            ipsum quaerat animi temporibus et magnam expedita. Pariatur
            voluptates eos cumque. Recusandae natus alias culpa quod
            exercitationem eum nam voluptatem, quae accusamus quibusdam modi
            eaque, perferendis est doloribus iusto molestias reprehenderit?
            Blanditiis repellendus temporibus hic dolor voluptatibus laborum.
            Libero facilis delectus quam consequuntur magni sint perferendis eos
            architecto asperiores, tenetur nobis, maxime quod provident dolorem
            doloremque saepe nulla at dicta eius voluptates. Laboriosam, in
            suscipit, eos aut error repellendus veritatis esse unde, minus
            exercitationem aspernatur atque voluptates sunt voluptatibus harum
            alias quas tenetur! Inventore quae, tempore a consequatur assumenda
            vero eum mollitia odit alias sit provident dolore soluta officiis in
            similique magnam quo, obcaecati amet quibusdam? Eveniet cum, enim
            illum animi accusamus beatae nam autem modi voluptas. Quo eaque eum,
            cupiditate quasi voluptatum beatae ut culpa incidunt. Laboriosam
            mollitia officiis molestias et ipsum vitae odio iste, delectus
            deserunt vel praesentium dignissimos modi maiores alias quas
            asperiores omnis, quibusdam laborum neque repellendus similique. Ut,
            corrupti! Nulla debitis doloribus ea quidem! Esse vitae hic eaque
            delectus deserunt officia quis ipsum similique, eos voluptatum ullam
            rem architecto quaerat animi, reiciendis et ipsa. Reprehenderit,
            atque. Recusandae perspiciatis illo aspernatur beatae deleniti, ea
            libero blanditiis suscipit? Assumenda minima aperiam officiis, nobis
            doloribus repudiandae consectetur quis dolorem voluptatem. Corrupti
            libero porro placeat suscipit eaque reiciendis pariatur vero nulla
            mollitia animi quaerat facere repellendus, fuga tempora tenetur, ut
            minus quas magnam exercitationem officiis. Consequatur culpa
            voluptatibus est repudiandae illo? Consequatur porro voluptatibus
            soluta corporis voluptas quos sint aliquam esse ducimus debitis,
            natus distinctio nisi accusantium optio, quisquam repellendus fuga
            enim quam cumque incidunt illum tenetur? Repudiandae reprehenderit
            hic deleniti voluptatibus, ea vitae, voluptas dignissimos quis
            minima excepturi, ipsam accusantium aspernatur. Et blanditiis
            mollitia, esse voluptates qui vitae nihil sit nostrum id autem
            quisquam nisi aspernatur, dignissimos aut enim libero expedita?
            Molestias perspiciatis commodi deserunt velit eligendi dolor fugit
            pariatur beatae fuga consectetur, consequuntur quisquam! Magni
            eligendi vitae dolorem. Eaque, totam iure. Eos ullam corporis
            debitis? Molestias maxime ad asperiores eaque dolore, temporibus
            rerum eligendi fuga ea enim voluptatibus laboriosam atque. Similique
            voluptatum a optio aliquam cupiditate, natus numquam voluptas quae
            mollitia vel magnam voluptate nihil iusto ex animi corrupti quidem
            dolore reprehenderit porro quis recusandae unde itaque molestiae
            nemo. Error adipisci, unde commodi quam odio fuga quisquam fugiat,
            molestiae numquam illo quas maxime? Nobis, architecto. Dolore id
            quibusdam maiores aliquid, voluptatum perspiciatis blanditiis
            dolorem dolor debitis in reprehenderit ab a hic nobis ut similique
            ad sit sint officia reiciendis quidem laboriosam, alias molestias.
            Eligendi, rem commodi aperiam, velit ullam nam odio fugiat, aut
            porro sequi pariatur enim officia illum quod asperiores non minus
            nobis. Quibusdam odio reiciendis laboriosam vel corporis cumque ex
            maiores voluptatibus unde quis ipsa, harum, libero aperiam labore
            quam ullam blanditiis! Quisquam cum delectus porro provident
            assumenda, similique ut, animi, iste soluta fugiat totam? Sit
            temporibus nesciunt iure aperiam voluptates? Eaque natus quibusdam
            similique vero iste culpa ipsam pariatur vitae aperiam impedit
            dolorem quod, tenetur dolore laborum veniam sit nobis tempora
            doloribus excepturi voluptatum veritatis voluptatibus placeat ex
            aspernatur. Tempora commodi quo voluptatibus animi esse molestias!
          </p>
          {this.children}
        </div>

        <script>{this._handleScroll}</script>
      </div>
    );
  }
}
export default Layout;
