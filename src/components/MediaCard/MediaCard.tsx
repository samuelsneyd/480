import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@mui/material';

interface Media {
  name: string;
  subtitle?: string;
  description: string;
  website: string;
  tags: string[];
  image: string;
  alt: string;
  priority: number;
}

interface MediaCardProps {
  media: Media,
  buttonText?: string
}

const MediaCard = ({ media, buttonText }: MediaCardProps) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component={'img'}
        height={'350'}
        image={media.image}
        alt={media.alt}
      />
      <CardContent>
        <Typography gutterBottom variant={'h5'} component={'div'}>
          {media.name}
        </Typography>
        <Typography gutterBottom variant={'body2'} component={'div'}>
          {media.subtitle}
        </Typography>
        <Typography variant={'body2'} color={'text.secondary'}>
          {media.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size={'small'}
          component={Link}
          href={media.website}
          target={'_blank'}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
