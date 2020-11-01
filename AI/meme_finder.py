import tensorflow as tf
import numpy as np

from tensorflow import keras
from sys import argv,stdout

class_names = ['0', '1', '11', '12', '13', '14', '15', '18', '19', '2', '20', '21', '22', '23', '24', '25', '27', '28', '3', '30', '31', '32', '33', '34', '35', '36', '37', '39', '4', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '5', '50', '51', '52', '53', '55', '57', '58', '59', '6', '60', '61', '65', '67', '69', '7', '70', '71', '72', '73', '76', '78', '79', '8', '81', '82', '83', '84', '85', '86', '87', '88', '89', '9', '90', '92', '93', '94', '95', '96', '98', '99']

reconstructed_model = tf.keras.models.load_model('./model.h5')

img = keras.preprocessing.image.load_img(
    'uploads/'+argv[1], target_size=(256, 256)
)
img_array = keras.preprocessing.image.img_to_array(img)
img_array = tf.expand_dims(img_array, 0) # Create a batch

predictions = reconstructed_model.predict(img_array)
score = tf.nn.softmax(predictions[0])
stdout.flush()
print(
    "{}-{:.2f}"
    .format(class_names[np.argmax(score)], 100 * np.max(score))
)