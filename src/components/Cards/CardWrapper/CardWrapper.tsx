import { ReactNode } from 'react';
import { cn } from '@/common';

export enum CardStyle {
  primary = 'primary',
  secondary = 'secondary',
}

export enum GradientDirection {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  topToBottom = 'topToBottom',
  bottomToTop = 'bottomToTop',
  TopLeftToBottom = 'TopLeftToBottom',
  TopRightToBottom = 'TopRightToBottom',
  BottomLeftToTop = 'BottomLeftToTop',
  BottomRightToTop = 'BottomRightToTop',
}

const Backgrounds: Record<CardStyle, string> = {
  [CardStyle.primary]: 'from-[#210D4B] to-[#0B081E] to-60%',
  [CardStyle.secondary]: 'from-[#160E41] to-[#0B081E]',
};

const Gradients: Record<GradientDirection, string> = {
  [GradientDirection.leftToRight]: 'bg-gradient-to-r',
  [GradientDirection.rightToLeft]: 'bg-gradient-to-l',
  [GradientDirection.topToBottom]: 'bg-gradient-to-b',
  [GradientDirection.bottomToTop]: 'bg-gradient-to-t',
  [GradientDirection.TopLeftToBottom]: 'bg-gradient-to-tr',
  [GradientDirection.TopRightToBottom]: 'bg-gradient-to-tl',
  [GradientDirection.BottomLeftToTop]: 'bg-gradient-to-br',
  [GradientDirection.BottomRightToTop]: 'bg-gradient-to-bl',
};

interface CardWrapperProps {
  /**
   * Optional class name to add to the component.
   */
  className?: string;

  /**
   * React nodes to be rendered as children of the card wrapper.
   */
  children?: ReactNode;

  /**
   * Style of the card, could define its appearance, such as outline or filled.
   */
  cardStyle?: CardStyle;

  /**
   * Direction of the gradient, if applicable, to be applied on the card.
   */
  gradientDirection?: GradientDirection;

  /**
   * Whether the card should have a border.
   */
  hasBorder?: boolean;

  /**
   * Specifies if the card should span the full width of its container.
   */
  isFullWidth?: boolean;
}

export const CardWrapper = ({
  children,
  className,
  hasBorder,
  cardStyle = CardStyle.primary,
  isFullWidth = false,
  gradientDirection = GradientDirection.TopRightToBottom,
}: CardWrapperProps) => {
  const classes = {
    container: cn(
      {
        'w-full': isFullWidth,
      },
      'relative rounded-3xl',
      Backgrounds[cardStyle],
      Gradients[gradientDirection],

      // Borders
      {
        'before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-br before:from-primary-950 before:to-primary-600 before:from-70% before:scale-[1.009] before:-z-[1] origin-center before:rounded-3xl':
          hasBorder,

        'before:scale-y-[1.01] before:scale-x-[1.003]': hasBorder && isFullWidth,
      },
      className,
    ),
  };

  return <article className={classes.container}>{children}</article>;
};
