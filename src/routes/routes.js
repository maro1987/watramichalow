import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import HomeView from '../views/home/home-view';
import NewsView from '../views/news/news-view';
import AboutView from '../views/about/about-view';
import ArtistsView from '../views/artists/artists-view';
import ProgrammeView from '../views/programme/programme-view';
import InfoView from '../views/info/info-view';
import GalleryView from '../views/gallery/gallery-view';
import GalleryImageSetView from '../views/gallery-image-set/gallery-image-set-view';
import ArtistView from '../views/artist/artist-view';
import ContactView from '../views/contact/contact-view';
import CoreLayout from '../layouts/core/core-layout';
import PrimaryLayout from '../layouts/primary/primary-layout';

export default (
  <Route component={CoreLayout}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomeView}/>
      <Route path="aktualnosci" component={NewsView}/>
      <Route path="owatrze" component={AboutView}/>
      <Route path="wykonawcy" component={ArtistsView}/>
      <Route path="program" component={ProgrammeView}/>
      <Route path="informacje" component={InfoView}/>
      <Route path="galeria" component={GalleryView}/>
      <Route path="galeria/:id" component={GalleryImageSetView}/>
      <Route path="wykonawcy/:id" component={ArtistView}/>
      <Route path="kontakt" component={ContactView}/>
      <Redirect from="*" to="/" />
    </Route>
  </Route>
);
