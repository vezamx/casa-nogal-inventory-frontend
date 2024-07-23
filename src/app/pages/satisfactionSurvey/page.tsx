"use client";
import FormErrorMessageComponent from "@/app/components/formErrorMessage/FormErrorMessage";
import MenuButton from "@/app/components/menuButton/MenuButton";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  menu: Yup.string().required('Por favor seleccione una opción'),
  bienvenida: Yup.string().required('Por favor seleccione una opción'),
  mesero: Yup.string().required('Por favor seleccione una opción'),
  tiempoEspera: Yup.string().required('Por favor seleccione una opción'),
  alimentos: Yup.string().required('Por favor seleccione una opción'),
  recomendacion: Yup.string().required('Por favor seleccione una opción')
});
const Survey = () =>{
  return (
    <Box w="full">
      <Formik
        initialValues={{
          menu: '',
          bienvenida: '',
          mesero: '',
          tiempoEspera: '',
          alimentos: '',
          recomendacion: ''
        }}
        validationSchema={validationSchema}
        onSubmit={
          async (values) => {
            await new Promise((resolve) => {
              console.log(values)
            })
          }
        }
      >
        {({ values, handleChange}) =>(
        <Form>
          <Box className="bg-customGray mb-0">
            {/* no toma bg='customGray*/}
            <Box>
              <MenuButton />
              <YellowLine />
            </Box>
          </Box>
          <Box textAlign="center">
            <Text fontSize="6xl">Encuesta de satisfacción Casa Nogal</Text>
          </Box>
          <Box ml={12} mt={4} textAlign="center">
            <FormControl as="fieldset">
              <FormLabel as="legend">¿Nuestro menú es variado?</FormLabel>
              <RadioGroup name="recomendacion" value={values.menu} onChange={handleChange}>
                <HStack spacing="24px">
                  <Field as={Radio} value="menu1" name='menu' size='lg'>Es muy variado</Field>
                  <Field as={Radio} value="menu2" name='menu' size='lg'>Es algo variado</Field>
                  <Field as={Radio} value="menu3" name='menu' size='lg'>Tiene variedad</Field>
                  <Field as={Radio} value="menu4" name='menu' size='lg'>No es variado</Field>
                  <Field as={Radio} value="menu5" name='menu' size='lg'>Le falta variedad</Field>
                </HStack>
              </RadioGroup>
              <FormErrorMessageComponent name='menu' />
              <Divider mt={7} mb={7} />
              <FormLabel as="legend">
                ¿Le dieron una cordial bienvenida?
              </FormLabel>
              <RadioGroup name="recomendacion" value={values.bienvenida} onChange={handleChange}>
                <HStack spacing="24px">
                  <Field as={Radio} value="bienvenida1" name='bienvenida' size='lg'>Claro, fue muy amable</Field>
                  <Field as={Radio} value="bienvenida2" name='bienvenida' size='lg'>Me recibió bien</Field>
                  <Field as={Radio} value="bienvenida3" name='bienvenida' size='lg'>No lo se</Field>
                  <Field as={Radio} value="bienvenida4" name='bienvenida' size='lg'>Me recibió mal</Field>
                  <Field as={Radio} value="bienvenida5" name='bienvenida' size='lg'>No, fue desastrozo</Field>
                </HStack>
              </RadioGroup>
              <FormErrorMessageComponent name='bienvenida' />
            </FormControl>
            <Divider mt={7} mb={7} />
            <FormLabel as="legend">
              ¿La mesera o mesero le dio una cordialmente?
            </FormLabel>
            <RadioGroup name="recomendacion" value={values.mesero} onChange={handleChange}>
              <HStack spacing="24px">
                <Field as={Radio} value="mesero1" name='mesero' size='lg'>Claro, fue muy amable</Field>
                <Field as={Radio} value="mesero2" name='mesero' size='lg'>Me atendio bien</Field>
                <Field as={Radio} value="mesero3" name='mesero' size='lg'>No lo se</Field>
                <Field as={Radio} value="mesero4" name='mesero' size='lg'>Me atendio mal</Field>
                <Field as={Radio} value="mesero5" name='mesero' size='lg'>No, fue desastrozo</Field>
              </HStack>
            </RadioGroup>
            <FormErrorMessageComponent name='mesero' />
            <Divider mt={7} mb={7} />
            <FormLabel as="legend">
              El tiempo de espera de sua alimentos fue
            </FormLabel>
            <RadioGroup name="recomendacion" value={values.tiempoEspera} onChange={handleChange}>
              <HStack spacing="24px">
                <Field as={Radio} value="tiempoEspera1" name='tiempoEspera' size='lg'>muy rápido</Field>
                <Field as={Radio} value="tiempoEspera2" name='tiempoEspera' size='lg'>Aceptable</Field>
                <Field as={Radio} value="tiempoEspera3" name='tiempoEspera' size='lg'>El normal</Field>
                <Field as={Radio} value="tiempoEspera4" name='tiempoEspera' size='lg'>Tardó un poco</Field>
                <Field as={Radio} value="tiempoEspera5" name='tiempoEspera' size='lg'>Tardó demaciado</Field>
              </HStack>
            </RadioGroup>
            <FormErrorMessageComponent name='tiempoEspera' />
            <Divider mt={7} mb={7} />
            <FormLabel as="legend">
              ¿Los alimentos fueron de su agrado?
            </FormLabel>
            <RadioGroup name="recomendacion" value={values.alimentos} onChange={handleChange}>
              <HStack spacing="24px">
                <Field as={Radio} value="alimentos1" name='alimentos' size='lg'>Claro, fueron excelentes</Field>
                <Field as={Radio} value="alimentos2" name='alimentos' size='lg'>Estubieron bien</Field>
                <Field as={Radio} value="alimentos3" name='alimentos' size='lg'>Lo normal</Field>
                <Field as={Radio} value="alimentos4" name='alimentos' size='lg'>Faltó sasón</Field>
                <Field as={Radio} value="alimentos5" name='alimentos' size='lg'>definintivamente no lo fueron</Field>             </HStack>
            </RadioGroup>
            <FormErrorMessageComponent name='alimentos' />
            <Divider mt={7} mb={7} />
            <FormLabel as="legend">
              ¿Nos recomendaría con otras personas?
            </FormLabel>
            <RadioGroup name="recomendacion" value={values.recomendacion} onChange={handleChange}>
              <HStack spacing="24px">
                <Field as={Radio} value="recomendacion1" name='recomendacion' size='lg'>Claro, ya lo estoy haciendo</Field>
                <Field as={Radio} value="recomendacion2" name='recomendacion' size='lg'>Es probable</Field>
                <Field as={Radio} value="recomendacion3" name='recomendacion' size='lg'>Tal vez</Field>
                <Field as={Radio} value="recomendacion4" name='recomendacion' size='lg'>Posiblemente no</Field>
                <Field as={Radio} value="recomendacion5" name='recomendacion' size='lg'>definintivamente no los recomiendo</Field>
              </HStack>
            </RadioGroup>
            <FormErrorMessageComponent name='recomendacion' />
            <Button
              mt={4}
              colorScheme="yellow"
              // isLoading={props.isSubmitting}
              type="submit"
            >
              Gracias por responder la encuesta
            </Button>
          </Box>
        </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Survey;
