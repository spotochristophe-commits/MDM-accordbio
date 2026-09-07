/**
 * CATALOGUE BIO N TRUFFE 2026
 * Produits à base de Truffe Noire Française Bio
 * TVA : 5,5% sur tous les produits
 */

const PRODUCTS_BIONTRUFFE = [
  // ========== AIDES CULINAIRES & SAUCES ==========
  {
    code: 'TARTUFFADE80',
    ean: '3770028175086',
    libelle: 'TARTUFFADE à la Truffe Noire 2% Bio',
    description: 'Préparation brouilllade',
    poids: '80g',
    pcb: 12,
    tva: 5.5,
    pu_ht: 8.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'CEPES80',
    ean: '3770028175079',
    libelle: 'DELICE DE CEPES et Truffe Noire 2% Bio',
    description: 'Préparation culinaire',
    poids: '80g',
    pcb: 12,
    tva: 5.5,
    pu_ht: 8.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'SAUCE80',
    ean: '3770028175062',
    libelle: 'SAUCE CREMEE à la Truffe Noire 1,5% Bio',
    description: 'Sauce crémeuse',
    poids: '80g',
    pcb: 12,
    tva: 5.5,
    pu_ht: 8.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'PARMESAN80',
    ean: '3770028175055',
    libelle: 'CREME DE PARMESAN et Truffe Noire 1,5%',
    description: 'Crème Parmesan',
    poids: '80g',
    pcb: 12,
    tva: 5.5,
    pu_ht: 8.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'BALSAMIQUE150',
    ean: '3770028175017',
    libelle: 'CREME DE BALSAMIQUE Truffe Noire 1,1%',
    description: 'Crème vinaigre balsamique',
    poids: '150ml',
    pcb: 12,
    tva: 5.5,
    pu_ht: 10.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'BALSAMIQUE100',
    ean: '3770028175147',
    libelle: 'CREME DE BALSAMIQUE Truffe Noire 1,1% Format compact',
    description: 'Crème vinaigre balsamique',
    poids: '100ml',
    pcb: 12,
    tva: 5.5,
    pu_ht: 10.50,
    categorie: 'Aides Culinaires',
    certif: 'AB',
    origine: 'France'
  },

  // ========== HUILES D'OLIVE AOP & MIEL BIO ==========
  {
    code: 'HUILE250',
    ean: '3770028175109',
    libelle: 'HUILE D\'OLIVE VIERGE EXTRA Truffe Noire Bio AOP Nyons 250ml',
    description: 'Huile d\'olive premium',
    poids: '250ml',
    pcb: 12,
    tva: 5.5,
    pu_ht: 19.00,
    categorie: 'Huiles & Condiments',
    certif: 'AB AOP',
    origine: 'France'
  },
  {
    code: 'HUILE100',
    ean: '3770028175116',
    libelle: 'HUILE D\'OLIVE VIERGE EXTRA Truffe Noire Bio AOP Nyons 100ml',
    description: 'Huile d\'olive premium',
    poids: '100ml',
    pcb: 12,
    tva: 5.5,
    pu_ht: 11.00,
    categorie: 'Huiles & Condiments',
    certif: 'AB AOP',
    origine: 'France'
  },
  {
    code: 'MIEL100',
    ean: '3770028175000',
    libelle: 'MIEL D\'ACCACIA à la Truffe Noire 1,1% Bio',
    description: 'Miel d\'acacia premium',
    poids: '100g',
    pcb: 12,
    tva: 5.5,
    pu_ht: 10.50,
    categorie: 'Huiles & Condiments',
    certif: 'AB',
    origine: 'France'
  },

  // ========== TRUFFES NATURELLES & NOUVEAUTES 2026 ==========
  {
    code: 'TRUFFE20BROSS',
    ean: '3770028175130',
    libelle: 'TRUFFES NOIRES Brossées 1ere Cuisson Bio Tuber Melanosporum',
    description: 'Truffes noires d\'origine France',
    poids: '20g',
    pcb: 6,
    tva: 5.5,
    pu_ht: 25.00,
    categorie: 'Truffes Naturelles',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'TRUFFE20BRISURES',
    ean: '3770028175123',
    libelle: 'TRUFFE NOIRE Brisures 1ere Cuisson Bio Tuber Melanosporum',
    description: 'Brisures de truffe noire',
    poids: '20g',
    pcb: 6,
    tva: 5.5,
    pu_ht: 20.00,
    categorie: 'Truffes Naturelles',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'DUO_CAJOU_AMANDE',
    ean: '3770028175161',
    libelle: 'DUO CAJOU AMANDE Truffe d\'Ete 1,4% Bio ★ NOUVEAUTE',
    description: 'Snack apéritif Bio',
    poids: '100g',
    pcb: 6,
    tva: 5.5,
    pu_ht: 9.50,
    categorie: 'Nouveautés 2026',
    certif: 'AB',
    origine: 'France'
  },
  {
    code: 'CHIPS_PDT',
    ean: '3770028175154',
    libelle: 'CHIPS ARTISANALES Truffe d\'Ete 1% Bio ★ NOUVEAUTE',
    description: 'Chips de pommes de terre France',
    poids: '100g',
    pcb: 16,
    tva: 5.5,
    pu_ht: 3.90,
    categorie: 'Nouveautés 2026',
    certif: 'AB',
    origine: 'France'
  }
];

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_BIONTRUFFE;
}
