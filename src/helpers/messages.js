import i18n from 'i18n';

export const REQUIRED_FIELD = (field = '') => i18n.t('common:is_required_field', { key: field });
