import * as React from 'react';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import DeckIcon from '@mui/icons-material/Deck';
import ForestIcon from '@mui/icons-material/Forest';
import KayakingIcon from '@mui/icons-material/Kayaking';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LooksIcon from '@mui/icons-material/Looks';
import ShowerIcon from '@mui/icons-material/Shower';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TvIcon from '@mui/icons-material/Tv';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import AccommodationIconsView from './AccommodationIconsView';

const icons = {
  left: [
    { text: '1 double bed', icon: BedIcon },
    { text: '1 bathroom', icon: ShowerIcon },
    { text: '1 kitchen', icon: KitchenIcon },
    { text: '2 decks', icon: DeckIcon },
    { text: '1 kayak', icon: KayakingIcon },
    { text: 'forest views', icon: ForestIcon }
  ],
  right: [
    { text: '2 comfy chairs', icon: ChairIcon },
    { text: '1 couch', icon: WeekendIcon },
    { text: '1 TV', icon: TvIcon },
    { text: 'free wifi', icon: WifiIcon },
    { text: 'mobile coverage', icon: SignalCellularAltIcon },
    { text: 'LGBTQ+ friendly', icon: LooksIcon }
  ]
};

const AccommodationIcons = () => {
  return (
    <AccommodationIconsView
      icons={icons}
    />
  );
};

export default AccommodationIcons;
