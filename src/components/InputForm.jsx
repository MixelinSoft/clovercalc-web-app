// Import Hooks
import { useFormik } from 'formik';
// Import Components
import { Button, Form, InputGroup } from 'react-bootstrap';
import Card from './UI/Card';
// Import Functions
import { validate } from '../services/validate';
// Import CSS
import styles from './InputForm.module.css';
// Import Images
import leafs3 from '../assets/3leaf.png';
import leafs4 from '../assets/4leaf.png';

const InputForm = (props) => {
  // Create Validation State
  const formik = useFormik({
    initialValues: {
      leafs: '4',
      frequency: '',
      fixedDiameter: '',
      fastening: '',
      useFixedDiameter: false,
      useFastening: false,
    },
    // Add Validate Function
    validate: validate,
    // Create Submit Handler
    onSubmit: (values) => {
      props.onSubmit({
        leafs: values.leafs,
        frequency: values.frequency,
        useFixedDiameter: values.useFixedDiameter,
        fixedDiameter: values.fixedDiameter,
        useFastening: values.useFastening,
        fastening: values.fastening,
      });
    },
  });

  return (
    <Card className={styles.container}>
      <Card className={styles.formCard}>
        <Form onSubmit={formik.handleSubmit}>
          <div className={styles.inputs}>
            <Form.Text>Кількість пелюсток:</Form.Text>
            <Form.Select
              defaultValue={formik.values.leafs}
              name='leafs'
              onChange={formik.handleChange}>
              <option value='4'>4</option>
              <option value='3'>3</option>
            </Form.Select>
            <Form.Text>Частота:</Form.Text>
            <Form.Text className={styles.errorMessage}>
              {'   '}
              {formik.errors.frequency}
            </Form.Text>
            <InputGroup>
              <Form.Control
                isInvalid={formik.errors.frequency}
                value={formik.values.frequency}
                name='frequency'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='number'
              />
              <InputGroup.Text>Мгц</InputGroup.Text>
            </InputGroup>
            <Form.Text>Фіксований діаметр:</Form.Text>
            <Form.Text className={styles.errorMessage}>
              {'   '}
              {formik.errors.fixedDiameter}
            </Form.Text>
            <InputGroup>
              <InputGroup.Checkbox
                onChange={formik.handleChange}
                name='useFixedDiameter'
                checked={formik.values.useFixedDiameter}
              />
              <Form.Control
                isInvalid={formik.errors.fixedDiameter}
                disabled={!formik.values.useFixedDiameter}
                type='number'
                name='fixedDiameter'
                placeholder={formik.values.useFixedDiameter ? 'Діаметр' : ''}
                value={formik.values.fixedDiameter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <InputGroup.Text>мм</InputGroup.Text>
            </InputGroup>
            <Form.Text>Врахувати кріплення:</Form.Text>
            <Form.Text className={styles.errorMessage}>
              {'   '}
              {formik.errors.fastening}
            </Form.Text>
            <InputGroup>
              <InputGroup.Checkbox
                onChange={formik.handleChange}
                name='useFastening'
                checked={formik.values.useFastening}
              />
              <Form.Control
                isInvalid={formik.errors.fastening}
                disabled={!formik.values.useFastening}
                name='fastening'
                type='number'
                placeholder={
                  formik.values.useFastening ? 'Довжина кріпленняя' : ''
                }
                value={formik.values.fastening}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <InputGroup.Text>мм</InputGroup.Text>
            </InputGroup>
          </div>
          <div className={styles.actions}>
            <Button variant='dark' type='submit'>
              Розрахувати
            </Button>
          </div>
        </Form>
      </Card>
      <Card className={styles.imageCard}>
        <img
          className={styles.image}
          src={formik.values.leafs === '3' ? leafs3 : leafs4}
          alt=''
        />
      </Card>
    </Card>
  );
};

export default InputForm;
