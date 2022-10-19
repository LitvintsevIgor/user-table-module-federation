import { IUserFormFields } from '../../../models';

export interface UserEditingFormProps {
  fields: IUserFormFields;
  onSave: (values: IUserFormFields) => void;
}
