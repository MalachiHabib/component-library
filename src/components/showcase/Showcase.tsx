import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ShowcaseProps {
  headingColor?: string;
  cardBackgroundColor?: string;
  cardTitleColor?: string;
  cardDescriptionColor?: string;
  cardContentColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonHoverBackgroundColor?: string;
}

export function Showcase({
  headingColor = 'text-blue-600',
  cardBackgroundColor = 'bg-white',
  cardTitleColor = 'text-gray-800',
  cardDescriptionColor = 'text-gray-600',
  cardContentColor = 'text-gray-700',
  buttonBackgroundColor = 'bg-blue-500',
  buttonTextColor = 'text-white',
  buttonHoverBackgroundColor = 'bg-blue-600',
}: ShowcaseProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className={`text-4xl font-bold mb-4 text-center ${headingColor}`}>
        Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className={`shadow-md ${cardBackgroundColor}`}>
          <CardHeader>
            <CardTitle className={`text-xl font-semibold ${cardTitleColor}`}>
              Card 1
            </CardTitle>
            <CardDescription className={cardDescriptionColor}>
              This is a description of Card 1.
            </CardDescription>
          </CardHeader>
          <CardContent className={cardContentColor}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className={`${buttonBackgroundColor} ${buttonTextColor} hover:${buttonHoverBackgroundColor}`}
            >
              Learn More
            </Button>
          </CardFooter>
        </Card>
        <Card className={`shadow-md ${cardBackgroundColor}`}>
          <CardHeader>
            <CardTitle className={`text-xl font-semibold ${cardTitleColor}`}>
              Card 2
            </CardTitle>
            <CardDescription className={cardDescriptionColor}>
              This is a description of Card 2.
            </CardDescription>
          </CardHeader>
          <CardContent className={cardContentColor}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className={`${buttonBackgroundColor} ${buttonTextColor} hover:${buttonHoverBackgroundColor}`}
            >
              Learn More
            </Button>
          </CardFooter>
        </Card>
        <Card className={`shadow-md ${cardBackgroundColor}`}>
          <CardHeader>
            <CardTitle className={`text-xl font-semibold ${cardTitleColor}`}>
              Card 3
            </CardTitle>
            <CardDescription className={cardDescriptionColor}>
              This is a description of Card 3.
            </CardDescription>
          </CardHeader>
          <CardContent className={cardContentColor}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className={`${buttonBackgroundColor} ${buttonTextColor} hover:${buttonHoverBackgroundColor}`}
            >
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
