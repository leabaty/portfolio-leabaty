import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div className="page legal__page">
        <h1 className="title">
          Politique de confidentialité
        </h1>

        <article className="legal__article">
          <p className="text">
            Cette Politique de confidentialité s’applique au site :
            www.apsara-yoga.com. Elle décrit nos procédures sur la collecte,
            l’utilisation et la diffusion de vos données personnelles lorsque
            vous utilisez notre site internet. Pour cela, nous vous informons à
            propos de :
          </p>

          <ul>
            <li className="legal__bullet">
              - La manière dont sont collectées et traitées les données à
              caractère personnel. Doivent être considérées comme données
              personnelles toutes les données étant susceptibles d’identifier un
              utilisateur. Il s’agit notamment du prénom et du nom, de l’âge, de
              l’adresse postale, l’adresse mail, la localisation de
              l’utilisateur,
            </li>
            <li className="legal__bullet">
              - Quels sont les droits des utilisateurs concernant ces données ;
            </li>
            <li className="legal__bullet">
              - Qui est responsable du traitement des données à caractère
              personnel collectées et traitées ;
            </li>
            <li className="legal__bullet">- A qui ces données sont transmises ;</li>
            <li className="legal__bullet">- La politique du site en matière de fichiers « cookies »</li>
          </ul>

          <p className="text">
            Nous utilisons vos données personnelles pour fournir et améliorer
            nos services. En vous rendant sur www.apsara-yoga.com , vous
            acceptez la collecte et l’utilisation des informations conformément
            à la présente Politique de confidentialité. Les données collectées
            sont sauvegardées dans un fichier informatisé par Apsara Yoga.
            Les renseignements rassemblés seront communiqués aux seuls
            destinataires suivants : Apsara Yoga. Ces données feront
            l’objet de traitement.
          </p>

          <p className="text">
            Vous garderez un droit de regard sur vos informations. Vous pourriez
            y accéder, les rectifier, demander leur modification et suppression
            et exercer votre droit à la limitation du traitement. Vous pourrez
            exercer ces droits à tout moment. Pour cela, vous pouvez contacter
            la responsable du traitement de données par mail à :
            apsara-yoga@gmail.com
          </p>

          <p className="text">
            Aussi, vous pouvez retirer votre consentement au traitement de vos
            données à tout moment ou vous opposer au traitement de vos données.
            Vous pouvez également exercer un droit à la portabilité sur vos
            données personnelles.
          </p>

          <p className="text">
            Si après avoir contacté notre service, vous constatez que vos droits
            « Informatiques et Libertés » ne sont pas respectés, vous pourrez
            adresser une réclamation à la Commission nationale de l’Informatique
            et des Libertés ou CNIL, 3 Places de Fontenoy, 75007 Paris.
          </p>

          </article>

          <article className="legal__article">
          <h1 className="title title--nano">
            Collecte et utilisation de vos données personnelles
          </h1>

          <p className="text">
            Types de données collectées : Nom, prénom, adresse électronique,
            numéro de téléphone. Les données d’utilisation peuvent inclure des
            informations telles que le type de navigateur, la version du
            navigateur, les pages de notre service que vous visitez, l’heure et
            la date de votre visite, le temps passé sur ces pages, les
            identifiants uniques des appareils et d’autres données de
            diagnostic.
          </p>

          <p className="text">
            Lorsque vous accédez au service par ou via un appareil mobile, nous
            pouvons recueillir automatiquement certaines informations, y
            compris, mais sans s’y limiter, le type d’appareil mobile que vous
            utilisez, l’identifiant unique de votre appareil mobile, votre
            système d’exploitation mobile, le type de navigateur Internet mobile
            que vous utilisez, les identifiants uniques des appareils et
            d’autres données de diagnostic. Nous pouvons également collecter les
            informations que votre navigateur envoie chaque fois que vous
            visitez notre service ou lorsque vous accédez au service par ou via
            un appareil mobile.
          </p>
          </article>

          <article className="legal__article">
          <h1 className="title title--nano">
            Technologies de suivi et cookies
          </h1>

          {/* <p className="text">
            Nous utilisons des Cookies pour suivre l’activité et l’évolution de
            nos services. Vous pouvez demander à votre navigateur de refuser
            tous les cookies ou d’indiquer quand un cookie est envoyé.
          </p> */}

          <p className="text">Nous n'utilisons pas de cookies.</p>
        </article>
      </div>
    </>
  );
}

export default PrivacyPolicy;
