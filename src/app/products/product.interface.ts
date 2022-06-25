import { EntityMetadata } from '../shared/model/entity-metadata.model';

export interface Product {
  id: string;

  title: string;
  description?: string;

  price: number;
  count: number;

  metadata: EntityMetadata;
}

export interface ProductCheckout extends Product {
  orderedCount: number;
  /** orderedCount * price */
  totalPrice: number;
}
