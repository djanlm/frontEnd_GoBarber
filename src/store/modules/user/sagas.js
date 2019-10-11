import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    ); // junta dois objetos

    const response = yield call(api.put, 'users', profile);
    yield put(updateProfileSuccess(response.data));
    toast.success('Perfil atualizado com sucesso!');
  } catch (err) {
    toast.error('Error updating your profile, check your form!');
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
